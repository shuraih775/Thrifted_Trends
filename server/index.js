const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/user');
const fs = require('fs');
const https = require('https');
const forge = require('node-forge');
const aesjs = require('aes-js');
const bcrypt = require('bcryptjs')
const {decode_privateKey, decrypt} = require('./assets/rsa');

const app = express();
const privateKey = fs.readFileSync('assets/private.key', 'utf8');
const certificate = fs.readFileSync('assets/certificate.crt', 'utf8');
const publicKey = fs.readFileSync('assets/public.key', 'utf8');

const credentials = { key: privateKey, cert: certificate };
app.use(express.json());
app.use(cors());

const httpsServer = https.createServer(credentials, app);

mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

    app.get('/', (req, res) => {
        res.send({ publicKey });
    });
    
app.post('/login', async (req, res) => {
    const { email, encryptedPassword, encryptedAesKey } = req.body;
    try {
        
        const privateKeyDecoded = decode_privateKey(privateKey);
        const decryptedAesKey = decrypt(privateKeyDecoded, encryptedAesKey);

        
        const aesKeyBytes = aesjs.utils.hex.toBytes(decryptedAesKey);
        const encryptedPasswordBytes = aesjs.utils.hex.toBytes(encryptedPassword);
        const aesEcb = new aesjs.ModeOfOperation.ecb(aesKeyBytes);
        const unpaddedTextBytes = encryptedPasswordBytes.filter(byte => byte !== 0);
        const decryptedPassword = aesjs.utils.utf8.fromBytes(unpaddedTextBytes);

        const user = await UserModel.findOne({ email: email });
        if (user) {
            const match = await bcrypt.compare(decryptedPassword, user.password);
            if (match) {
                res.json('Success');
            } else {
                res.status(401).json('Password is incorrect');
            }
        } else {
            res.status(404).json('No record existed');
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error', details: err });
    }
});

app.post('/web', async (req, res) => {
    const { name, email, encryptedPassword, encryptedAesKey } = req.body;
    // console.log( name, email, encryptedPassword, encryptedAesKey);
    try {
        const privateKeyDecoded = decode_privateKey(privateKey);
        const decryptedAesKey = decrypt(privateKeyDecoded, encryptedAesKey);
        
        const aesKeyBytes = aesjs.utils.hex.toBytes(decryptedAesKey);
        // console.log(aesKeyBytes);
        const encryptedPasswordBytes = aesjs.utils.hex.toBytes(encryptedPassword);
        // console.log(encryptedPasswordBytes);
        const aesEcb = new aesjs.ModeOfOperation.ecb(aesKeyBytes);
        console.log(aesEcb);
        
        const decryptedPasswordBytes = aesEcb.decrypt(encryptedPasswordBytes);
        console.log(decryptedPasswordBytes);
        const unpaddedTextBytes = decryptedPasswordBytes.filter(byte => byte !== 0);
                
        const decryptedPassword = aesjs.utils.utf8.fromBytes(unpaddedTextBytes);
        console.log(decryptedPassword);
        const hashedPassword = await bcrypt.hash(decryptedPassword, 10);
        const newUser = await UserModel.create({ name, email, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error', details: err });
    }
});

httpsServer.listen(3001, () => {
    console.log('HTTPS server is running on https://localhost:3001');
});

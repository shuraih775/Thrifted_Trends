import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import aesjs from 'aes-js';
import forge from 'node-forge';
import { encrypt, pemToDer, parseRsaPublicKey } from './resources/rsa';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [publicKey, setPublicKey] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://localhost:3001/')
            .then(response => {
                setPublicKey(response.data.publicKey);
            })
            .catch(err => console.error('Error fetching public key:', err));
    }, []);

    const generateAesKey = () => {
        const key = forge.random.getBytesSync(16); // 16 bytes = 128 bits AES key
        return forge.util.bytesToHex(key);
    };


    const encryptDataWithAes = (data, aesKey) => {
        const keyBytes = aesjs.utils.hex.toBytes(aesKey);
        const textBytes = aesjs.utils.utf8.toBytes(data);

        const padSize = 16 - (textBytes.length % 16);
        const paddedTextBytes = new Uint8Array(textBytes.length + padSize);
        paddedTextBytes.set(textBytes);
        paddedTextBytes.fill(padSize, textBytes.length); // Add padding

        const aesEcb = new aesjs.ModeOfOperation.ecb(keyBytes);
        const encryptedBytes = aesEcb.encrypt(paddedTextBytes);
        return aesjs.utils.hex.fromBytes(encryptedBytes);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const aesKey =  generateAesKey();
        const encryptedPassword = encryptDataWithAes(password, aesKey);
        const publicKeyDecoded = parseRsaPublicKey(pemToDer(publicKey));
        const encryptedAesKey = encrypt(publicKeyDecoded.n, publicKeyDecoded.e, aesKey);
        
        

        axios.post('https://localhost:3001/web', { name, email, encryptedPassword, encryptedAesKey })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="header__bar">
                <Link to="/home" style={{ color: "white" }}>Thrifted Trends</Link>
            </div>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                autoComplete="off"
                                name="name"
                                className="form-control rounded-0"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="Password"
                                placeholder="Enter Password"
                                name="Password"
                                className="form-control rounded-0"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">
                            Register
                        </button>
                    </form>
                    <p>Already have an account</p>
                    <Link to={"/login"} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Signup;

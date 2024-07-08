
function pemToDer(pem) {
    const base64 = pem.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\n/g, '');
    const binary = Buffer.from(base64, 'base64');
    return binary;
}

function parseRsaPrivateKey(der) {
    let offset = 0;


    if (der[offset] !== 0x30) {
        throw new Error('Invalid DER format: Expected SEQUENCE.');
    }
    offset += 1; 
    const length = der[offset]; 
    offset += 1; 
    function readInteger() {
        if (der[offset] !== 0x02) {
            throw new Error('Invalid DER format: Expected INTEGER.');
        }
        offset += 1; 
        const length = der[offset]; 
        offset += 1; 
        const value = der.slice(offset, offset + length); 
        offset += length; 
        return BigInt('0x' + value.toString('hex'));
    }

    const version = readInteger(); 
    const n = readInteger(); 
    // const e = readInteger(); 
    const d = readInteger(); 
    const p = readInteger(); 
    const q = readInteger(); 
    const dP = readInteger(); 
    const dQ = readInteger(); 
    const qInv = readInteger(); 

    return {
        n: n,
        // e: e,
        d: d,
        p: p,
        q: q,
        dP: dP,
        dQ: dQ,
        qInv: qInv
    };
}

function bigIntToString(bigint) {
    let hex = bigint.toString(16); 
    if (hex.length % 2 !== 0) {
        hex = '0' + hex; 
    }
    const bytes = Buffer.from(hex, 'hex'); 
    const utf8String = bytes.toString('utf8'); 
    return utf8String;
}

function modExp(base, exp, mod) {
    if (mod === 1n) return 0n;
    let result = 1n;
    base = base % mod;
    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }
        exp = exp >> 1n;
        base = (base * base) % mod;
    }
    return result;
}

function decode_privateKey(privateKey){
    const binary = pemToDer(privateKey);
    return parseRsaPrivateKey(binary);
}

function decrypt(privateKey, encryptedData) {
    const { n, d } = privateKey;
    const c = BigInt('0x' + encryptedData); 
    const m = modExp(c, d, n);
    const decryptedData = bigIntToString(m);
    return decryptedData;
}

function decryptCRT(privateKey, encryptedData) {
    const { n, d, p, q, dP, dQ, qInv } = privateKey;
    const c = BigInt('0x' + encryptedData); 

    const m1 = modExp(c, dP, p); 
    const m2 = modExp(c, dQ, q); 

    
    const h = (m1 - m2) * qInv % p; 

    
    const m = m2 + h * q; 

    const decryptedData = bigIntToString(m); 
    return decryptedData;
}

module.exports = {decode_privateKey,decrypt};
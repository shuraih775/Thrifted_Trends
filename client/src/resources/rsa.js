function pemToDer(pem) {
    // Remove the PEM header, footer, and newlines
    const base64 = pem.replace(/-----BEGIN (?:PUBLIC|PRIVATE) KEY-----|-----END (?:PUBLIC|PRIVATE) KEY-----|\n/g, '');
    // Decode base64 to binary string
    const binaryString = atob(base64);
    const binaryArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        binaryArray[i] = binaryString.charCodeAt(i);
    }
    return binaryArray;
}


function parseRsaPublicKey(der) {
    const modulusStart = 29;
    let modulusLength = ((der[modulusStart - 2] << 8) | der[modulusStart - 1]);

    if (modulusLength & 0x80) {
        const lengthOfLength = modulusLength & 0x7f;
        modulusLength = 0;
        for (let i = 0; i < lengthOfLength; i++) {
            modulusLength = (modulusLength << 8) | der[modulusStart - 1 + i];
        }
    }

    if (modulusLength <= 0 || modulusStart + modulusLength >= der.length) {
        throw new Error('Invalid modulus length');
    }

    const modulus = der.slice(modulusStart, modulusStart + modulusLength);

    const exponentStart = modulusStart + modulusLength + 2;
    if (exponentStart >= der.length) {
        throw new Error('Invalid exponent offset');
    }

    const exponentLength = der[exponentStart - 1];
    if (exponentLength <= 0 || exponentStart + exponentLength > der.length) {
        throw new Error('Invalid exponent length');
    }

    const exponent = der.slice(exponentStart, exponentStart + exponentLength);

    // Debug statements
    console.log('Modulus Length:', modulusLength);
    console.log('Modulus (hex):', Array.from(modulus).map(b => b.toString(16).padStart(2, '0')).join(''));

    console.log('Exponent Length:', exponentLength);
    console.log('Exponent (hex):', Array.from(exponent).map(b => b.toString(16).padStart(2, '0')).join(''));

    const modulusHex = Array.from(modulus).map(b => b.toString(16).padStart(2, '0')).join('');
    const exponentHex = Array.from(exponent).map(b => b.toString(16).padStart(2, '0')).join('');

    if (!modulusHex || !exponentHex) {
        throw new Error('Invalid modulus or exponent hex string');
    }

    return {
        n: BigInt('0x' + modulusHex),
        e: BigInt('0x' + exponentHex)
    };
}

function stringToBigInt(data) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(data);
    return BigInt('0x' + Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(''));
}


function modExp(base, exponent, modulus) {
    let result = 1n;
    base = base % modulus;
    while (exponent > 0n) {
        if ((exponent % 2n) === 1n) {
            result = (result * base) % modulus;
        }
        exponent = exponent >> 1n;
        base = (base * base) % modulus;
    }
    return result;
}


function encrypt(n, e, data) {
    const m = stringToBigInt(data);
    if (m >= n) {
        throw new Error("Data too large to encrypt with the provided key size.");
    }
    const c = modExp(m, e, n);
    return c.toString(16);
}


export { encrypt, parseRsaPublicKey, pemToDer };

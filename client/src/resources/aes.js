// S-Box for AES
const SBOX = [
    0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
    0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
    0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
    0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
    0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
    0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
    0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
    0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
    0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
    0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
    0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
    0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
    0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
    0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
    0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
    0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16
];

// AES RCON for key expansion
const RCON = [
    0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a
];

// AES Key Schedule (Key Expansion)
function keyExpansion(key) {
    const expandedKey = new Array(176);
    let temp;

    for (let i = 0; i < 16; i++) {
        expandedKey[i] = key[i];
    }

    for (let i = 16; i < 176; i += 4) {
        temp = expandedKey.slice(i - 4, i);

        if (i % 16 === 0) {
            temp = keyScheduleCore(temp, i / 16);
        }

        for (let j = 0; j < 4; j++) {
            expandedKey[i + j] = expandedKey[i + j - 16] ^ temp[j];
        }
    }

    return expandedKey;
}

function keyScheduleCore(word, iteration) {
    word.push(word.shift());

    for (let i = 0; i < 4; i++) {
        word[i] = SBOX[word[i]];
    }

    word[0] ^= RCON[iteration];

    return word;
}

// AddRoundKey
function addRoundKey(state, roundKey) {
    for (let i = 0; i < 16; i++) {
        state[i] ^= roundKey[i];
    }
}

// SubBytes
function subBytes(state) {
    for (let i = 0; i < 16; i++) {
        state[i] = SBOX[state[i]];
    }
}

// ShiftRows
function shiftRows(state) {
    const temp = new Array(16);

    temp[0] = state[0];
    temp[1] = state[5];
    temp[2] = state[10];
    temp[3] = state[15];

    temp[4] = state[4];
    temp[5] = state[9];
    temp[6] = state[14];
    temp[7] = state[3];

    temp[8] = state[8];
    temp[9] = state[13];
    temp[10] = state[2];
    temp[11] = state[7];

    temp[12] = state[12];
    temp[13] = state[1];
    temp[14] = state[6];
    temp[15] = state[11];

    for (let i = 0; i < 16; i++) {
        state[i] = temp[i];
    }
}

// MixColumns
function mixColumns(state) {
    for (let i = 0; i < 4; i++) {
        const a = i * 4;
        const col = state.slice(a, a + 4);

        state[a] = mul(0x02, col[0]) ^ mul(0x03, col[1]) ^ col[2] ^ col[3];
        state[a + 1] = col[0] ^ mul(0x02, col[1]) ^ mul(0x03, col[2]) ^ col[3];
        state[a + 2] = col[0] ^ col[1] ^ mul(0x02, col[2]) ^ mul(0x03, col[3]);
        state[a + 3] = mul(0x03, col[0]) ^ col[1] ^ col[2] ^ mul(0x02, col[3]);
    }
}

function mul(a, b) {
    let p = 0;
    for (let counter = 0; counter < 8; counter++) {
        if (b & 1) p ^= a;
        let hi_bit_set = a & 0x80;
        a = (a << 1) & 0xFF;
        if (hi_bit_set) a ^= 0x1b;
        b >>= 1;
    }
    return p;
}

// AES Encryption for a single block
function aesEncryptBlock(block, expandedKey) {
    let state = block.slice();

    addRoundKey(state, expandedKey.slice(0, 16));

    for (let round = 1; round < 10; round++) {
        subBytes(state);
        shiftRows(state);
        mixColumns(state);
        addRoundKey(state, expandedKey.slice(round * 16, (round + 1) * 16));
    }

    subBytes(state);
    shiftRows(state);
    addRoundKey(state, expandedKey.slice(160, 176));

    return state;
}

// AES-ECB Encryption
function aesEcbEncrypt(plaintext, key) {
    let plaintextBytes = stringToByteArray(plaintext);
    let keyBytes = stringToByteArray(key);
    const blockSize = 16;
    const expandedKey = keyExpansion(keyBytes);
    let ciphertext = [];

    for (let i = 0; i < plaintextBytes.length; i += blockSize) {
        let block = plaintextBytes.slice(i, i + blockSize);
        while (block.length < blockSize) {
            block.push(0); // Padding with zeroes
        }
        let encryptedBlock = aesEncryptBlock(block, expandedKey);
        ciphertext = ciphertext.concat(encryptedBlock);
    }

    return byteArrayToHexString(ciphertext);
}

// Convert string to byte array
function stringToByteArray(str) {
    let byteArray = [];
    for (let i = 0; i < str.length; i++) {
        byteArray.push(str.charCodeAt(i));
    }
    return byteArray;
}

// Convert byte array to string
function byteArrayToString(byteArray) {
    return String.fromCharCode.apply(null, byteArray);
}

// Convert byte array to hex string
function byteArrayToHexString(byteArray) {
    return byteArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

// Example usage
let plaintext = "This is a test message!";
let key = "1234567890123456"; 

// let plaintextBytes = stringToByteArray(plaintext);
// let keyBytes = stringToByteArray(key);

// let encryptedBytes = aesEcbEncrypt(plaintextBytes, keyBytes);
// let encryptedHex = byteArrayToHexString(encryptedBytes);

// console.log("Encrypted text in hex:", encryptedHex);

console.log(aesEcbEncrypt(plaintext,key));
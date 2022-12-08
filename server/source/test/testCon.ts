import fs = require('fs');
import crypto from 'crypto';
require("dotenv").config();

//const passphrase:string = crypto.randomBytes(1536).toString('base64');

//console.log(process.env.PASSPHRASE)

const keypair = crypto.generateKeyPairSync(
    'ec',
    {
        namedCurve: "P-384",
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            //cipher : 'aes-256-cbc',
            //passphrase: String(process.env.PASSPHRASE)
        }
    }
)

//console.log(process.env.PASSPHRASE)

fs.writeFile('privatekey.pem', keypair.privateKey, function (err) {
    if (err) return console.log(err);
})

fs.writeFile('publickey.pem', keypair.publicKey, function (err) {
    if (err) return console.log(err);
})
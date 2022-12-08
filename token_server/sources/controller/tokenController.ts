import jwt = require('jsonwebtoken');
import { Algorithm, Secret } from 'jsonwebtoken';
import crypto from 'crypto';

class authentication {
    static async tokenGeneration(payload : {[key: string]: any}, privateKey : string, keyPass : string) {
        try {
            const algo:Algorithm = "ES384";
            let option = {
                algorithm: algo,
                expiresIn: "4h",
                notBefore: Math.floor(Date.now() / 1000)
            };
            //console.log(keyPass);
            payload['padding'] = crypto.randomBytes(48).toString('base64');
            //console.log(jwt.sign(payload, privateKey, option))
            //console.log(jwt.sign(payload, {key: privateKey, passphrase: keyPass}, option))
            return jwt.sign(payload, privateKey, option);
            //return jwt.sign(payload, {key: privateKey, passphrase: keyPass}, option);
        } catch (error) {
            throw error;
        }
        
    } 
}

export = authentication
import argon2 = require('argon2');
require("dotenv").config();

export class Authentication {
    static async passwordHash (password : string){
        try {
            return argon2.hash(password, {
                type: argon2.argon2id,
                hashLength: 100
            });
        } catch (error) {
            return Promise.reject(error);   
        }
    }

    static async validatePassword (hash : string, password : string) {
        try {
            if (hash.startsWith("$argon2")) {
                return argon2.verify(hash, password);
            }
        } catch (error) {
            return Promise.reject(error);
        }
        return Promise.reject("No known algo");
    }
}
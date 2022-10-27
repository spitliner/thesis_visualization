import con = require('../config/database');

class UserModel {
    static async newUser(username : string, password : string, name : string, surname : string, email : string, phone : string) {
        try {
            let sql : string = "INSERT INTO 'Employee' ('username', 'password', 'name', 'surname', 'email', 'phone_number') VALUES (?, ?, ?, ?, ?, ?)";
            return new Promise(function(resolve, reject) {
                con.query(sql, [username, password, name, surname, email, phone], function(err, result, fields) {
                    
                });
            });
        } catch (error) {
            
        }
    }

    static async getUser(username : string) {
        
    }
}
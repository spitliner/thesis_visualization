import con = require('../config/database');

class ProjectModel {
    static async getAllPublicProject(UserID : String): Promise<Function> {
        const sql = "FROM ";
        try {
            return new Promise(function(resolve, reject) {
                con.query(sql, function(err, result, fields) {
                    if (err) { 
                        return reject(err);
                    }    
                    return resolve(result);
                });
            })
        }
        catch(err) {
            throw err;
        }   
    }
}
import mysql = require("mysql");
import { getErrorMessage } from "../middleware/errorHandling";


const con = mysql.createConnection({
    host            :   "localhost",
    user            :   "db_test",
    password        :   "test1",
    database        :   "test_db",
   // timezone        :   process.env.TIMEZONE,
});

const sql : string = "SELECT * FROM test_table_2";
try {
    con.query(sql, function(error, result, fields){
        if (error) {
            throw error.code;
        }

        console.log(result);
        //console.log(fields);
    });
} catch (error) {
    console.log(error);
}
require("dotenv").config();
import mysql = require("mysql");

export = mysql.createConnection({
    host            :   process.env.HOST,
    user            :   process.env.DATABASE_ID,
    password        :   process.env.DATABASE_PASS,
    database        :   process.env.DATABASE_NAME,
    timezone        :   process.env.TIMEZONE,
});
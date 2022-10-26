require("dotenv").config();
import mysql = require("mysql");

export = mysql.createConnection({
    host            :   process.env.SECRET_HOST,
    user            :   process.env.SECRET_DATABASE_ID,
    password        :   process.env.SECRET_DATABASE_PASS,
    database        :   process.env.SECRET_DATABASE_NAME,
    timezone        :   process.env.TIMEZONE,
});
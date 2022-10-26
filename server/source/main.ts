require("dotenv").config();
import express = require("express");
import cors = require("cors");

import connection = require("./config/database");

const server = express();
server.use(cors);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

let portNum : number = (Number(process.env.PORT) || 3000);

connection.connect(function(err) {
    if (err) {
      throw err;
    }
    else {
      console.log("Database connected");
    }
  });

server.listen(portNum, () => {
    console.log("Server started on port " + portNum);
})
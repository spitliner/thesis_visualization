require("dotenv").config();
import express = require("express");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

let portNum : number = (Number(process.env.PORT) || 4000);

server.use("/api/auth", require('./route/tokenRoute'));
server.get('/', (request, response) => {
    response.send("Failed route");
})

server.listen(portNum, () => {
    console.log("Token server started on port " + portNum);
})
const functions = require("firebase-functions");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const {accountAPI, accountGroupAPI, authAPI, expenseAPI, incomeAPI, seedAPI, transactionAPI, userAPI} = require("./api");
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(accountAPI);
server.use(accountGroupAPI);
server.use(authAPI);
server.use(expenseAPI);
server.use(incomeAPI);
server.use(seedAPI);
server.use(transactionAPI);
server.use(userAPI);

// datbase connection
mongoose.connect(process.env.MONGODB_URI, () => {
  console.log(`connected ${process.env.MONGODB_URI}`);
});

// exports.lucrum = functions.https.onRequest(server);
server.listen(process.env.PORT, () => {
  console.log(`Server listening on PORT:${process.env.PORT}`);
});

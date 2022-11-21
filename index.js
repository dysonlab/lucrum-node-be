const functions = require("firebase-functions");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const {accountAPI, accountGroupAPI, authAPI, expenseAPI, incomeAPI, seedAPI, transactionAPI, userAPI} = require("./api");
const { app } = require("firebase-admin");
const server = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Lucrum API",
      version: "1.0.0",
      description: "A personal finance app by dysonlab",
    },
    servers: [{url: `http://localhost:7000`}]
  },
  apis: ["./api/*.js"]
}

const specs = swaggerJsDoc(options)

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

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
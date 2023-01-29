const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { constant } = require("./config/constant")

const { accountAPI,
  accountGroupAPI,
  authAPI,
  expenseCategoryAPI,
  expenseSubcategoryAPI,
  incomeCategoryAPI,
  incomeSubcategoryAPI,
  seedAPI,
  transactionAPI,
  userAPI
} = require("./api");

const server = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Lucrum API",
      version: "1.0.0",
      description: "A personal finance app by dysonlab",
    },
    servers: [
      { url: `http://localhost:5000` },
      { url: `http://localhost:5000/lucrum-be-2f472/us-central1/server` },
      { url: `https://us-central1-lucrum-be-2f472.cloudfunctions.net/server` },
    ]
  },
  apis: ["./api/*.js"]
}

const specs = swaggerJsDoc(options)
server.use(cors());
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
server.use(bodyParser.json());
server.use(accountAPI);
server.use(accountGroupAPI);
server.use(authAPI);
server.use(expenseCategoryAPI);
server.use(expenseSubcategoryAPI);
server.use(incomeCategoryAPI);
server.use(incomeSubcategoryAPI);
server.use(seedAPI);
server.use(transactionAPI);
server.use(userAPI);

// datbase connection
mongoose.connect(constant.MONGODB_URI, () => {
  console.log(`connected ${constant.MONGODB_URI}`);
});

server.listen(constant.PORT, () => { console.log(`Server listening on PORT:${constant.PORT}`); })
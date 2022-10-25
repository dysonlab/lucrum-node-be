const express = require("express");
const router = express.Router();

const {createTransaction, readTransactions, updateTransaction, deleteTransaction} = require("../controller/transaction");

router.post("/transaction", createTransaction);
router.get("/transactions", readTransactions);
router.put("/transaction/:_id", updateTransaction);
router.delete("/transaction/:_id", deleteTransaction);

module.exports = router;

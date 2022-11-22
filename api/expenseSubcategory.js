
const express = require("express");
const router = express.Router()

const {createExpenseSubcategory} = require("../controller/expenseSubcategory");

router.post("/expense/subcategory", createExpenseSubcategory);

module.exports = router;

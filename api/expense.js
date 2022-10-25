const express = require("express");
const router = express.Router();

const {createExpenseCategory} = require("../controller/expense");
const {createExpenseSubCategory} = require("../controller/expense");

router.post("/expense/category", createExpenseCategory);
router.post("/expense/subcategory", createExpenseSubCategory);

module.exports = router;

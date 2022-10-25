const express = require("express");
const router = express.Router();

const {createIncomeCategory} = require("../controller/income");
const {createIncomeSubCategory} = require("../controller/income");

router.post("/income/category", createIncomeCategory);
router.post("/income/subcategory", createIncomeSubCategory);

module.exports = router;

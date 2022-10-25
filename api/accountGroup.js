const express = require("express");
const router = express.Router();

const {createAccountGroup} = require("../controller/accountGroup");

router.post("/account-group", createAccountGroup);

module.exports = router;

const express = require("express");
const router = express.Router();

const {createAccount} = require("../controller/account");

router.post("/account", createAccount);

module.exports = router;

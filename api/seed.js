const express = require("express");
const router = express.Router();

const { populate, terminate } = require("../controller/seed");

router.post("/seed/populate", populate);
router.post("/seed/terminate", terminate);

module.exports = router;

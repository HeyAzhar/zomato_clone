const express = require("express");
const router = express.Router();

const { create } = require("./controller");

router.post("/", create);

// instead of this line

// exports.userRouter = router;

// we need this

module.exports = router;

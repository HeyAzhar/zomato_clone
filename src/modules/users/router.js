const express = require("express");
const router = express.Router();

const { getUser } = require("./controller");

router.get("/", getUser);

exports.userRouter = router;

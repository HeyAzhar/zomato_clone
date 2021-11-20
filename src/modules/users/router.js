const { isAuthentocated } = require("../../middlewares/auth");
const { validator } = require("../../middlewares/validator");
const schema = require("./validator");

const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.post("/signup", validator(schema.signup), controller.signup);

router.post("/login", validator(schema.login), controller.login);

module.exports = router;

const controller = require("./controller");
const { validator } = require("../../middlewares/validator");
const schema = require("./validator");

const express = require("express");
const router = express.Router();

router.post(
  "/signup",
  validator(schema.signupRestaurant),
  controller.signupRestaurant
);

module.exports = router;

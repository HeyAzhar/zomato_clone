const { Router } = require("express");

const { userRouter } = require("../modules/users/router");

//==>> we were missing the below line during class
// we are suppose to use the router as method not object
const router = Router();

router.get("/user", userRouter);

module.exports = router;

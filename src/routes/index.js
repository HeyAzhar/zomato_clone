const { Router } = require("express");

const userRouter = require("../modules/users/router");

const router = Router();

router.use("/user", userRouter);

module.exports = router;

const { Router } = require("express");

const userRouter = require("../modules/users/router");
const restaurantRouter = require("../modules/restaurant/router");

const router = Router();

router.use("/user", userRouter);
router.use("/restaurant", restaurantRouter);

module.exports = router;

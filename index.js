const { Router } = require("express");

const userRouter = require("../modules/user/router");
const taskRouter = require("../modules/task/router");
const ticketRouter = require("../modules/ticket/router");
const discomRouter = require("../modules/discom/router");
const siteRouter = require("../modules/site/router");
const miscRouter = require("../modules/misc/router");

const imsRouter = require("../modules/ims/router");
const equipRouter = require("../modules/equip/router");
const easiRouter = require("../modules/easi/router");

const ocrRouter = require("../modules/ocr/router");

const operationRouter = require("../modules/operations/router");

const uploadRouter = require("../modules/upload/router");
const authRouter = require("../modules/auth/router");
const { upload } = require("../libs/s3/index.js");

const router = Router();

router.use("/user", userRouter);
router.use("/task", taskRouter);
router.use("/ticket", ticketRouter);
router.use("/discom", discomRouter);
router.use("/site", siteRouter);
router.use("/misc", miscRouter);
router.use("/ims", imsRouter);
router.use("/equip", equipRouter);
router.use("/easi", easiRouter);
router.use("/ocr", ocrRouter);
router.use("/operations", operationRouter);
router.use("/upload", upload, uploadRouter);
router.use("/auth", authRouter);
router.get("/", (_req, res) => res.json({ success: true }));

module.exports = router;

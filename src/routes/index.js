import express from "express";
import userRouter from "../routes/user";
import docRouter from "../docs/Docs";
const router = express.Router();

router.use("/user", userRouter);
router.use("/docs", docRouter);
export default router;

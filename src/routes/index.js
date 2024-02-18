import express from "express";
import userRouter from "../routes/user";
import docRouter from "../docs/Docs";
import projectRouter from "./Project";
const router = express.Router();

router.use("/user", userRouter);
router.use("/docs", docRouter);
router.use("/project", projectRouter);
export default router;

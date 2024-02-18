import express from "express";
import userRouter from "../routes/user";
import docRouter from "../docs/Docs";
import projectRouter from "./Project";
import WorkRouter from "./Works";
import experienceRouter from "./Experience";
import aboutRouter from "./About";
const router = express.Router();

router.use("/user", userRouter);
router.use("/docs", docRouter);
router.use("/project", projectRouter);
router.use("/work", WorkRouter);
router.use("/experience", experienceRouter);
router.use("/about", aboutRouter);
export default router;

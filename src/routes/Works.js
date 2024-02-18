import express from "express";
import { createWork, getAllWork, updateWork } from "../controllers/Works";
import fileUpload from "../helper/multer";
const WorkRouter = express.Router();

WorkRouter.post("/create", fileUpload.single("files"), createWork);
WorkRouter.put("/update/:id", fileUpload.single("files"), updateWork);
WorkRouter.get("/read", getAllWork);

export default WorkRouter;

import express from "express";

import fileUpload from "../helper/multer";
import { createexperience, getAllexperience, updateexperience } from "../controllers/Experience";
const experienceRouter = express.Router();

experienceRouter.post("/create", fileUpload.single("files"), createexperience);
experienceRouter.put("/update/:id", fileUpload.single("files"), updateexperience);
experienceRouter.get("/read", getAllexperience);

export default experienceRouter;

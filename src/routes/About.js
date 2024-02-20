import express from "express";

import fileUpload from "../helper/multer";
import {
  createabout,
  deleteSkils,
  getAllabout,
  updateabout,
} from "../controllers/About";

const aboutRouter = express.Router();

aboutRouter.post("/create", fileUpload.single("files"), createabout);
aboutRouter.put("/update/:id", fileUpload.single("files"), updateabout);
aboutRouter.get("/read", getAllabout);
aboutRouter.delete("/delete/:id", deleteSkils);

export default aboutRouter;

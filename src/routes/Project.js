import express from "express";
import fileUpload from "../helper/multer";
import Authorization from "../middleware/authorization";
import {
  createProject,
  deleteProject,
  getAllProject,
  getOneProject,
  updateProject,
} from "../controllers/Project";
const projectRouter = express.Router();

projectRouter.post(
  "/create",
  fileUpload.single("Image"),
  Authorization,
  createProject
);
projectRouter.put(
  "/update/:id",
  fileUpload.single("Image"),
  Authorization,
  updateProject
);
projectRouter.get("/read", getAllProject);
projectRouter.get("/read/:id", getOneProject);
projectRouter.delete("/delete/:id", Authorization, deleteProject);

export default projectRouter;

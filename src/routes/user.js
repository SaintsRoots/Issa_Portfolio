import express from "express";
import fileUpload from "../helper/multer";
import {
  getAll,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import { login } from "../controllers/authoController";
// import { userValidatorRules } from "../services/validation";
const userRouter = express.Router();

userRouter.post(
  "/create",
  fileUpload.single("Image"),
  // userValidatorRules(),
  createUser
);
userRouter.get("/read", getAll);
userRouter.get("/read/:id", getOneUser);
userRouter.put("/update/:id", fileUpload.single("Image"), updateUser);
userRouter.delete("/delete/:id", deleteUser);
userRouter.post("/auth", fileUpload.single("files"), login);
export default userRouter;

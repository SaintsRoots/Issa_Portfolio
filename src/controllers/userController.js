import user from "../models/userModels";
import { uploadToCloud } from "../helper/cloudinary";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
// create user
export const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, firstname, lastname, email, password } = req.body;
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const CreateUser = await user.create({
      username,
      firstname,
      lastname,
      email,
      Image: result?.secure_url,
      password: hashedPass,
    });

    return res.status(201).json({
      status: "201",
      message: "Account Created Well",
      data: CreateUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to Create User",
      error: error.message,
    });
  }
};

// get All user

export const getAll = async (req, res) => {
  try {
    const getAll = await user.find();
    return res.status(200).json({
      status: "200",
      message: "All User Retrived Well",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to Create User",
      error: error.message,
    });
  }
};

// get One User

export const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findId = await user.findById(id);
    if (!findId) {
      return res.status(404).json({
        status: "404",
        message: "User ID Not Found",
      });
    }
    const getAll = await user.find();
    return res.status(200).json({
      status: "200",
      message: "One User Retrived Well",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to Create User",
      error: error.message,
    });
  }
};

// Update User

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, firstname, lastname, email, password } = req.body;
    const findId = await user.findById(id);
    if (!findId) {
      return res.status(404).json({
        status: "404",
        message: "User ID Not Found",
      });
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    await user.findByIdAndUpdate(id, {
      username,
      firstname,
      lastname,
      email,
      Image: result?.secure_url,
      password: hashedPass,
    });

    return res.status(201).json({
      status: "201",
      message: "Account Updated Well",
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to Update User",
      error: error.message,
    });
  }
};

// delete
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findId = await user.findById(id);
    if (!findId) {
      return res.status(404).json({
        status: "404",
        message: "User ID Not Found",
      });
    }
    await user.findByIdAndDelete(id);
    return res.status(200).json({
      status: "200",
      message: "user Deleted Well",
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to Deleted User",
      error: error.message,
    });
  }
};

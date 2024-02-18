import project from "../models/Project";
import { uploadToCloud } from "../helper/cloudinary";
// create project

export const createProject = async (req, res) => {
  try {
    const { title, description } = req.body;
    let result;

    const existingTitle = await project.findOne({ title });
    if (existingTitle) {
      return res.status(400).json({
        status: "400",
        message: "Project title Alread Exist",
        data: createPost,
      });
    }

    if (req.file) result = await uploadToCloud(req.file, res);

    const createPost = await project.create({
      Image: result?.secure_url,
      title,
      description,
    });
    return res.status(201).json({
      status: "201",
      message: "Project created Well",
      data: createPost,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to create Project",
      error: error.message,
    });
  }
};
// Update Project
export const updateProject = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;
    const findId = await project.findById(id);
    if (!findId) {
      return res.status(404).json({
        status: "404",
        message: "Project Id Not Found",
      });
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    await project.findByIdAndUpdate(id, {
      Image: result?.secure_url,
      title,
      description,
    });
    return res.status(201).json({
      status: "201",
      message: "Project Updated Well",
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to create Project",
      error: error.message,
    });
  }
};

// getAll
export const getAllProject = async (req, res) => {
  try {
    const getAll = await project.find();
    return res.status(200).json({
      status: "200",
      message: "All Project Retrieve Well",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to Retrieve Project",
      error: error.message,
    });
  }
};

// getOneAll
export const getOneProject = async (req, res) => {
  try {
    const { id } = req.params;
    const getOne = await project.findById(id);
    if (!getOne) {
      return res.status(404).json({
        status: "404",
        message: "Project Id Not Found",
      });
    }
    return res.status(200).json({
      status: "200",
      message: "All Project Retrieve Well",
      data: getOne,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to Retrieve Project",
      error: error.message,
    });
  }
};
// Delete
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const getOne = await project.findById(id);
    if (!getOne) {
      return res.status(404).json({
        status: "404",
        message: "Project Id Not Found",
      });
    }
    await project.findByIdAndDelete(id);
    return res.status(200).json({
      status: "200",
      message: "Deleted Well",
      data: getOne,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to Delete Project",
      error: error.message,
    });
  }
};

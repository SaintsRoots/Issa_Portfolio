import { experience } from "../models/Works";

// Create experience

export const createexperience = async (req, res) => {
  try {
    const { experienceDesc } = req.body;
    const makexperience = await experience.create({ experienceDesc });
    return res.status(201).json({
      status: "201",
      message: "experience Create Well",
      data: makexperience,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "experience Failed to be Created",
      error: error.message,
    });
  }
};

// get All

export const getAllexperience = async (req, res) => {
  try {
    const getIt = await experience.find();
    return res.status(200).json({
      status: "200",
      message: "experience Retrieved Well",
      data: getIt,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "experience Failed to be Created",
      error: error.message,
    });
  }
};

// update experience

export const updateexperience = async (req, res) => {
  try {
    const { experienceDesc } = req.body;
    const { id } = req.params;
    const findId = await experience.findById(id);

    if (!findId) {
      return res.status(404).json({
        status: "404",
        message: "experience Id Not Found",
      });
    }
    await experience.findByIdAndUpdate(id, { experienceDesc });
    return res.status(201).json({
      status: "201",
      message: "experience Updated Well",
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "experience Failed to be Updated",
      error: error.message,
    });
  }
};

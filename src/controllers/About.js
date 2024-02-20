import { about } from "../models/Works";

// Create about

export const createabout = async (req, res) => {
  try {
    const { aboutDesc, title, desc } = req.body;
    const makabout = await about.create({ aboutDesc, skills: { title, desc } });
    return res.status(201).json({
      status: "201",
      message: "about Create Well",
      data: makabout,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "about Failed to be Created",
      error: error.message,
    });
  }
};

// get All

export const getAllabout = async (req, res) => {
  try {
    const getIt = await about.find();
    return res.status(200).json({
      status: "200",
      message: "about Retrieved Well",
      data: getIt,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "about Failed to be Created",
      error: error.message,
    });
  }
};

// update about

export const updateabout = async (req, res) => {
  try {
    const { aboutDesc, title, desc } = req.body;
    const { id } = req.params;
    const findId = await about.findById(id);

    if (!findId) {
      return res.status(404).json({
        status: "404",
        message: "about Id Not Found",
      });
    }
    await about.findByIdAndUpdate(id, { aboutDesc, skills: { title, desc } });
    return res.status(201).json({
      status: "201",
      message: "about Updated Well",
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "about Failed to be Updated",
      error: error.message,
    });
  }
};

// delete

export const deleteSkils = async (req, res) => {
  try {
    const { id } = req.params;
    const findId = await about.findById(id);

    if (!findId) {
      return res.status(404).json({
        status: "404",
        message: "Skils Id Not Found",
      });
    }
    await about.findByIdAndDelete(id);
    return res.status(200).json({
      status: "200",
      message: "Skils Deleted Well",
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Skils Failed to be Deleted",
      error: error.message,
    });
  }
};
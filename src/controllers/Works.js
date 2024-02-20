import { work } from "../models/Works";

// Create Work

export const createWork = async (req, res) => {
  try {
    const { workDesc, title, desc } = req.body;
    const makeWork = await work.create({ workDesc, skills: { title, desc } });
    return res.status(201).json({
      status: "201",
      message: "Work Create Well",
      data: makeWork,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Work Failed to be Created",
      error: error.message,
    });
  }
};

// get All

export const getAllWork = async (req, res) => {
  try {
    const getIt = await work.find();
    return res.status(200).json({
      status: "200",
      message: "Work Retrieved Well",
      data: getIt,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Work Failed to be Created",
      error: error.message,
    });
  }
};

// update Work

export const updateWork = async (req, res) => {
  try {
    const { workDesc, title, desc } = req.body;
    const { id } = req.params;
    const findId = await work.findById(id);

    if (!findId) {
      return res.status(404).json({
        status: "404",
        message: "Work Id Not Found",
      });
    }
    await work.findByIdAndUpdate(id, { workDesc });
    return res.status(201).json({
      status: "201",
      message: "Work Updated Well",
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Work Failed to be Updated",
      error: error.message,
    });
  }
};

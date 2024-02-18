import mongoose from "mongoose";
const projectSchema = new mongoose.Schema(
  {
    Image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const project = mongoose.model("project", projectSchema);
export default project;

import mongoose from "mongoose";
// work
const workSchema = new mongoose.Schema(
  {
    workDesc: {
      type: String,
    },
  },
  { timestamps: true }
);
export const work = mongoose.model("works", workSchema);

// About
const aboutSchema = new mongoose.Schema(
  {
    aboutDesc: {
      type: String,
    },
    skills: {
      title: {
        type: String,
      },
      desc: {
        type: String,
      },
    },
  },
  { timestamps: true }
);
export const about = mongoose.model("about", aboutSchema);
// experience
const experienceSchema = new mongoose.Schema(
  {
    experienceDesc: {
      type: String,
    },
    experience: {
      title: {
        type: String,
      },
      desc: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export const experience = mongoose.model("experience", experienceSchema);

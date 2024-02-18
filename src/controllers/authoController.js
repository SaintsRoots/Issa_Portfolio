import user from "../models/userModels";
import bcrypt from "bcrypt";
import generateToken from "../services/tokenGeneretor";
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return res.status(422).json({
        message: "Username Required",
      });
    }

    const userLogin = await user.findOne({ username });

    if (!userLogin) {
      return res.status(422).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, userLogin.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    // Generate a token for the logged-in user
    const token = generateToken(userLogin._id);

    return res.status(200).json({
      message: "User logged in successfully",
      data: userLogin,
      token,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to login user", error: error.message });
  }
};

import { body, check } from "express-validator";
export const userValidatorRules = () => {
  return [
    body("file").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Image is required.");
      }
      return true;
    }),
    body("username")
      .trim()
      .not()
      .isEmpty()
      .withMessage("username is required."),
    check("firstname")
      .trim()
      .not()
      .isEmpty()
      .withMessage("firstname is required."),
    check("lastname")
      .trim()
      .not()
      .isEmpty()
      .withMessage("lastname is required."),
    check("email")
      .trim()
      .isEmail()
      .not()
      .isEmpty()
      .withMessage("email is required."),
    check("password")
      .trim()
      .not()
      .isEmpty()
      .withMessage("password is required.")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long."),
    ,
  ];
};

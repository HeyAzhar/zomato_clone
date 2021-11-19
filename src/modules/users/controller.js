const User = require("../../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    // check if user exist

    const userExist = await User.getByPhone(req.body.phone);

    if (userExist)
      return res.status(409).send({
        success: false,
        message: "User already exist, please try login",
      });

    // hash password

    req.body.password = await bcrypt.hash(req.body.password, 10);

    // save to DB

    const newUser = await User.create(req.body);

    res.status(201).send({
      success: true,
      message: "Successfully registered, please login",
    });
  } catch (error) {
    res.status(409).send({
      success: false,
      message: "Unable to signup",
    });
  }
};

exports.login = async (req, res) => {
  try {
    // check if the user exist

    const user = await User.getByPhone(req.body.phone);

    if (!user)
      return res.status(409).send({
        success: false,
        message: "User doesn't exist, please signup",
      });

    // check password

    const passMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passMatch)
      return res.status(401).send({
        success: false,
        message: "Incorrect password",
      });

    delete user.password;

    const token = jwt.sign({ ...user }, "SECRETTTTTT");

    user.token = token;

    // generate access token and return

    return res.status(200).send({
      success: true,
      data: user,
      message: "Successfully logged in",
    });
  } catch (error) {
    console.log({ error });
    return res.status(409).send({
      success: false,
      message: "Unable to login",
    });
  }
};

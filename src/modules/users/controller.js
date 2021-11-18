const User = require("../../models/users");

exports.create = async (req, res) => {
  const newUser = await User.create(req.body).catch((error) => {
    return res.status(409).send({
      success: false,
      message: "Unable to save user",
    });
  });

  res.status(200).send({
    success: true,
    data: newUser,
    message: "Successfully saved the user",
  });
};

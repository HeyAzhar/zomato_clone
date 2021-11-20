const User = require("../../models/users");
const Restaurant = require("../../models/restaurant");
const { ROLE } = require("../../models/users/constant");

const bcrypt = require("bcrypt");

exports.signupRestaurant = async (req, res) => {
  let { restaurantName, location, ownerName, phone, password } = req.body;

  try {
    const userExist = await User.getByPhone(req.body.phone);

    if (userExist)
      return res.status(409).send({
        success: false,
        message: "User already exist, please try login",
      });

    // add user

    password = await bcrypt.hash(req.body.password, 10);

    const owner = await User.create({
      name: ownerName,
      role: ROLE.RESTAURANT,
      password,
      phone,
    });

    // add restaurant with userId

    const newRestaurant = await Restaurant.create({
      name: restaurantName,
      location,
      owner: owner?._id,
    });

    // update user with restaurantId

    await User.update({ phone }, { restaurant: newRestaurant._id });

    return res.status(201).send({
      success: true,
      message: "Restaurant added, we will contact you shortly",
    });
  } catch (error) {
    return res.status(409).send({
      success: false,
      message: "Unable to add restaurant",
    });
  }
};

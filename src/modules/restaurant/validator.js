const Joi = require("joi");

exports.signupRestaurant = Joi.object({
  restaurantName: Joi.string().required(),
  location: Joi.string().required(),
  ownerName: Joi.string().required(),
  phone: Joi.number().required(),
  password: Joi.string().required(),
});

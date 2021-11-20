const Joi = require("joi");

exports.login = Joi.object({
  phone: Joi.number().required(),
  password: Joi.string().required(),
});

exports.signup = Joi.object({
  name: Joi.string().required(),
  phone: Joi.number().required(),
  password: Joi.string().required(),
  email: Joi.string(),
  role: Joi.number(),
});

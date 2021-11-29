const Restaurant = require("./schema");

exports.create = (body) => Restaurant.create(body);

exports.get = () => Restaurant.find();

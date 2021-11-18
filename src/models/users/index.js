const User = require("./shcema");

exports.create = (body) => User.create(body);

exports.get = () => User.findOne();

exports.update = () => User.updateOne();

exports.deleteOne = () => User.deleteOne();

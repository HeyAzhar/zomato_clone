const User = require("./shcema");

exports.create = (body) => User.create(body);

exports.getByPhone = (phone) => User.findOne({ phone }).lean();

exports.update = (query, data) =>
  User.updateOne({ ...query }, { $set: { ...data } });

const Category = require("./shcema");

exports.create = (body) => Category.create(body);

exports.update = (query, data) =>
  Category.updateOne({ ...query }, { $set: { ...data } });

const Item = require("./shcema");

exports.create = (body) => Item.create(body);

exports.update = (query, data) =>
  Item.updateOne({ ...query }, { $set: { ...data } });

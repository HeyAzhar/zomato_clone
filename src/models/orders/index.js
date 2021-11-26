const Order = require("./shcema");

exports.create = (body) => Order.create(body);

exports.update = (query, data) =>
  Order.updateOne({ ...query }, { $set: { ...data } });

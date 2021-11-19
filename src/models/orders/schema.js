const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: String,
  restaurant: String,
  items: [
    {
      itemId: String,
      quantity: Number,
      price: Number,
    },
  ],
  total: Number,
});

module.exports = mongoose.model("Order", OrderSchema);

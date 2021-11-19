const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  category: String,
  restaurant: String,
  price: Number,
});

module.exports = mongoose.model("Item", ItemSchema);

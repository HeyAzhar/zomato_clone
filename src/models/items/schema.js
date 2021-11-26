const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  price: Number,
});

module.exports = mongoose.model("Item", ItemSchema);

const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
});

module.exports = mongoose.model("Category", CategorySchema);

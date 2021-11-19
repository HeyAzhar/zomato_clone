const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  items: [String],
  restaurant: String,
});

module.exports = mongoose.model("Category", CategorySchema);

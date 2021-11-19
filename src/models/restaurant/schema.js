const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  owner: String,
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);

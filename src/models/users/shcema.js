const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: {
      type: Number,
      unique: true,
      minlength: 10,
      maxlength: 13,
      required: true,
    },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String, required: true },
    address: new Schema({
      name: String,
      address: String,
      zip: Number,
    }),
    role: { type: String, required: true },
    orders: [String],
    restaurant: { type: String },
    status: { type: Boolean, default: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

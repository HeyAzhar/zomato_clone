const { ROLE, ROLE_ENUM } = require("./constant");

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
    address: {
      type: {
        name: { type: String, required: true },
        address: String,
        zip: Number,
      },
    },
    role: { type: Number, default: ROLE.USER, enum: ROLE_ENUM, required: true },
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    status: { type: Boolean, default: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

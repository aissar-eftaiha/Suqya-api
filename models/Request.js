const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    quantity: { type: Number, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    mosque: { type: mongoose.Types.ObjectId, ref: "Mosque", required: true },
    status: { type: String, default: "Pending" },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Request" ,requestSchema)


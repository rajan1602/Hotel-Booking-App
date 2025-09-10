const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  property: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  guests: Number,
  totalPrice: Number,
  paymentStatus: { type: String, enum: ["pending", "paid", "cancelled"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);

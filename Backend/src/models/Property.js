const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  host: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: String,
  address: {
    city: String,
    state: String,
    country: String,
    lat: Number,
    lng: Number,
  },
  amenities: [String],
  images: [{
    url: String,
    publicId: String,
    alt: String,
    order: Number,
  }],
  pricePerNight: { type: Number, required: true },
  maxGuests: Number,
}, { timestamps: true });

module.exports = mongoose.model("Property", propertySchema);

const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking({ ...req.body, user: req.user._id });
    const saved = await booking.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

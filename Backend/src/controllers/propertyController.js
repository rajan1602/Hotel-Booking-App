const Property = require("../models/Property");

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("host", "name email");
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addProperty = async (req, res) => {
  try {
    const property = new Property({ ...req.body, host: req.user._id });
    const saved = await property.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

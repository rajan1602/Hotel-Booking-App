const express = require("express");
const { getProperties, addProperty } = require("../controllers/propertyController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getProperties);
router.post("/", protect, addProperty);

module.exports = router;

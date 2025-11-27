const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  price: { type: Number, required: true },
  type: String, // Foliage, Succulent, Flowering, etc.
  light: String, // Bright, indirect, or low light
  watering: String, // Weekly, twice a week, etc.
  stock: { type: Number, default: 10 },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: true},
  createdAt: { type: Date, default: Date.now },
});

const plantModel = mongoose.model("plants", plantSchema);
module.exports = plantModel;

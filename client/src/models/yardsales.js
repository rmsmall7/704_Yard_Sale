const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yardSchema = new Schema({
  time: { type: String, required: true },
  location: { type: String, required: true },
  items: String,
  date: { type: Date, default: Date.now }
});

const Yard = mongoose.model("Yard", yardSchema);

module.exports = Yard;
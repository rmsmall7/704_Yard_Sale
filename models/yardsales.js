const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yardpostSchema = new Schema({
  title: {
    type: String
  },

  location: {
    type: String
  },

  start_time: {
    type: String
  },

  end_time: {
    type: String
  },

  items: {
  type: String
  },

  date: {
    type: String
  },
  
  Picture: {
    type: String
  }
});

const Yard = mongoose.model("Yard", yardpostSchema);

module.exports = Yard;
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
    type: Date
  }
  
  // saved: {
  //   type: Boolean,
  //   default: "false"
  // }
});

const Yard = mongoose.model("Yard", yardpostSchema);

module.exports = Yard;
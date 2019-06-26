const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yardSchema = new Schema({
  tite: {
    type: String, 
    required: true
  },

  time: 
  { type: String, required: true 
  },

  location: 
  { type: String, required: true
  },

  items: {
  type: String
  },

  date: {
    type: Date, 
    default: Date.now
  },
  
  Picture: {
    type: String
  }
});

const Yard = mongoose.model("Yard", yardSchema);

module.exports = Yard;
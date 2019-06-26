const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yardpostedSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,

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

const Yard = mongoose.model("Yard", yardpostSchema);

module.exports = Yard;
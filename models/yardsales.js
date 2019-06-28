const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yardpostSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,

  tite: {
    type: String, 
    required: true
  },

  start_time: 
  { type: String, required: true 
  },

  end_time: 
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
    
  },
  
  Picture: {
    type: String
  }
});

const Yard = mongoose.model("Yard", yardpostSchema);

module.exports = Yard;
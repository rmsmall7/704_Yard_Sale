const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yardpostSchema = new Schema({
<<<<<<< HEAD
  _id: mongoose.Schema.Types.ObjectId,
=======
  title: {
    type: String
  },
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802

  location: {
    type: String
  },

<<<<<<< HEAD
  start_time: 
  { type: String, required: true 
  },

  end_time: 
  { type: String, required: true 
=======
  start_time: {
    type: String
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802
  },

  end_time: {
    type: String
  },

  items: {
  type: String
  },

  date: {
<<<<<<< HEAD
    type: Date, 
    
=======
    type: Date
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802
  },
  
  Picture: {
    type: String
  }
});

const Yard = mongoose.model("Yard", yardpostSchema);

module.exports = Yard;
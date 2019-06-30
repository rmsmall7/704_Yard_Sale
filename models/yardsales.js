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
<<<<<<< HEAD
    type: Date
=======
    type: String
  },
  
  Picture: {
    type: String
>>>>>>> 2da9a1a044f889a813285ce6d1dfa1de94df1a0e
  }
  
  // saved: {
  //   type: Boolean,
  //   default: "false"
  // }
});

const Yard = mongoose.model("Yard", yardpostSchema);

module.exports = Yard;
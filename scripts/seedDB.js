const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const yardSeed = [
  {
    "title": "Family Sale in Noda",
    "location": "Noda",
    "StartTime": "06:00 am",
    "EndTime": "4 hours",
    "picture":"none",
    "date": "new Date(Date.now())"
  },
  {
    "title": "Shelisha's Sale in Hickory",
    "location": "Hickory",
    "StartTime": "06:00 am",
    "EndTime": "3 hours",
    "picture":"none",
    "date": "new Date(Date.now())"
  },
  {
    "title": "Natasha's Sale in Indian Trail",
    "location": "Indian Trail",
    "StartTime": "06:00 am",
    "EndTime": "1 hour",
    "picture":"none",
    "date": "new Date(Date.now())"
  },
  {
    "title": "Ismael's Sale in Steele Creek",
    "location": "Steele Creek",
    "StartTime": "10:00 am",
    "EndTime": "4 hours",
    "picture":"none",
    "date": "new Date(Date.now())"
  },
  {
    "title": "Caleb's Sale in Uptown",
    "location": "Uptown",
    "StartTime": "08:00 am",
    "EndTime": "2 hours",
    "picture":"none",
    "date": "new Date(Date.now())"
  },
];

db.Yard
  .remove({})
  .then(() => db.Yard.collection.insertMany(yardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

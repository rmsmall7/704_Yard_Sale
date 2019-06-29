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
    "date": "6/29/2019",
    "items": "none"
  },
  {
    "title": "Shelisha's Sale in Hickory",
    "location": "Hickory",
    "StartTime": "06:00 am",
    "EndTime": "3 hours",
    "date": "6/29/2019",
    "items": "none"
  },
  {
    "title": "Natasha's Sale in Indian Trail",
    "location": "Indian Trail",
    "StartTime": "06:00 am",
    "EndTime": "1 hour",
    "date": "6/29/2019",
    "items": "none"
  },
  {
    "title": "Ismael's Sale in Steele Creek",
    "location": "Steele Creek",
    "StartTime": "10:00 am",
    "EndTime": "4 hours",
    "date": "6/29/2019",
    "items": "none"
  },
  {
    "title": "Caleb's Sale in Uptown",
    "location": "Uptown",
    "StartTime": "08:00 am",
    "EndTime": "2 hours",
    "date": "6/29/2019",
    "items": "none"
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

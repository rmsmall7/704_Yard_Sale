const express = require("express");

const mongoose = require("mongoose");
const morgan = require('morgan')
const routes = require("./routes");
const session = require('express-session')
const user = require("./models/user");
const app = express();
const PORT = process.env.PORT || 8080;


const db = require('./config/keys').MongoURI;
// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactyardlist");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(morgan);
app.use('/user', user)
app.use(
  session({
  secret: 'squirrel', //pick a random string to make the hash that is generated secure
  })
)
app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});
// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

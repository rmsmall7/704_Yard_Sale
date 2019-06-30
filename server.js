const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require('body-parser');
const user = require('./models/user')
const session = require('express-session')
const PORT = process.env.PORT || 8080;


const db = require('./config/keys').MongoURI;
// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactyardlist");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Sessions
app.use(
	session({
		secret: 'squirrel', //pick a random string to make the hash that is generated secure

	})
)


// Routes
app.use('/user', user)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
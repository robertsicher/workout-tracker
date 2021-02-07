//NPM modules
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Port
const PORT = process.env.PORT || 3000;

dotenv.config();

//Express App
const app = express()
.use(logger('dev'))
.use(express.urlencoded({ extended: true}))
.use(express.json)
.use(express.static('public')); 

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);
 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//App listening feedback
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
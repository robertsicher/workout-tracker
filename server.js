//NPM
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//Port
const PORT = process.env.PORT || 3000;


//Express App
const app = express();

//require('./routes/html-routes.js')(app);
//require('./routes/api-routes.js')(app);
 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//App listening feedback
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
  });
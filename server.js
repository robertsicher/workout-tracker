//NPM
const express = require('express');

//Port
const PORT = process.env.PORT || 3000;

//Express App
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
//require('./routes/html-routes.js')(app);
//require('./routes/api-routes.js')(app);
 
//App listening feedback
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
  });
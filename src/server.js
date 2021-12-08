
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);
app.use(express.json());
app.use(express.urlencoded());


app.get('https://www.udemy.com/api-2.0/courses/', async (req, res) => {
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  next();
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
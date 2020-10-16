const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

let calcFields = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//POST from input fields
//const obj = { numOne: 0, operation: '', numTwo: 0 };
app.post('/calculation', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

//GET results of calculations
app.get('/calculation', (req, res) => {
  //console.log('GET');
  res.send(calcFields);
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
});

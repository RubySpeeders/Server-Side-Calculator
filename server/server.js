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
  //console.log(req.body);
  calcFields.push(req.body);
  console.log(calcFields);
  for (let i = 0; i < calcFields.length; i++) {
    const entry = calcFields[i];
    if (entry.operation === 'add') {
      //console.log('add that bench');
    } else if (entry.operation === 'subtract') {
      //console.log('subtract that bench');
    } else if (entry.operation === 'multiply') {
      //console.log('multiply that bench');
    } else if (entry.operation === 'divide') {
      //console.log('divide that bench');
    }
  }
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

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

let calcFields = [];
let answer = 0;

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
      answer += Number(entry.numOne) + Number(entry.numTwo);
      //console.log(answer);
    } else if (entry.operation === 'subtract') {
      answer += Number(entry.numOne) - Number(entry.numTwo);
      //console.log(answer);
    } else if (entry.operation === 'multiply') {
      answer += Number(entry.numOne) * Number(entry.numTwo);
      //console.log(answer);
    } else if (entry.operation === 'divide') {
      answer += Number(entry.numOne) / Number(entry.numTwo);
      //console.log(answer);
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

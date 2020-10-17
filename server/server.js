const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

let calcHistory = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//POST from input fields
//const obj = { numOne: 0, operation: '', numTwo: 0 };
app.post('/calculation', (req, res) => {
  //console.log(req.body);
  const calcObj = req.body;
  let arrayCalc = [];
  arrayCalc.push(calcObj);
  for (let i = 0; i < arrayCalc.length; i++) {
    const entry = arrayCalc[i];
    console.log(entry);
    let answer = 0;
    if (entry.operation === '+') {
      answer += Number(entry.numOne) + Number(entry.numTwo);
      console.log(answer);
      calcObj.answer = answer;
    } else if (entry.operation === '-') {
      answer += Number(entry.numOne) - Number(entry.numTwo);
      calcObj.answer = answer;
    } else if (entry.operation === '*') {
      answer += Number(entry.numOne) * Number(entry.numTwo);
      calcObj.answer = answer;
    } else if (entry.operation === '/') {
      answer += Number(entry.numOne) / Number(entry.numTwo);
      calcObj.answer = answer;
    }
  }
  calcHistory.push(calcObj);
  res.sendStatus(200);
});

//GET results of calculations and history
app.get('/calculation', (req, res) => {
  //console.log('GET');
  res.send(calcHistory);
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
});

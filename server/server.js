const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

let calcFields = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Save Data
app.post('/calculation', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
});

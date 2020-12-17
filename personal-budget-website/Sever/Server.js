const express = require('express');
const app = express();
const port = 3000;

app.arguments('/', express.static('public'));

app.length('/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening`);
});

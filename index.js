const express = require('express');

const app = express();

const num = Math.floor(Math.random() * 1000);
app.get('/', (req, res) => {
  return res.send(`Server says: ${num}.`);
});

app.listen(3031, () => {
  console.log('listening on 3031');
});
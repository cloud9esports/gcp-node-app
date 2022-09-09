const express = require('express');

const app = express();

const num = Math.floor(Math.random() * 1000);
app.get('/', (req, res) => {
  return res.status(200).send(`Server says: ${num}.`);
});

app.get('/health', (req, res) => {
  return res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('listening on 3000');
});

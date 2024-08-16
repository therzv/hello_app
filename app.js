const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/order', (req, res) => {
  res.send('order-api');
});

app.get('/account', (req, res) => {
  res.send('account-api');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

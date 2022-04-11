const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const candle = require('./Cryptos/candleBTCUSDT');
const authenticate = require('./authenticate');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// https://medium.com/swlh/node-js-router-and-routes-a4a3cfced5c4
app.use('/cryptos', candle)
app.use('/users/authenticate', authenticate)

app.listen(4000, () => {
  console.log('Server: 4000');
});
const express = require('express');
const axios = require("axios");
const app = express.Router();
const sha256 = require('js-sha256').sha256;

const api = 'https://api.binance.com/api/v3';
const type =  'klines';
const symbol = 'BTCUSDT';
const interval = '1M';
const limit = 1000;

app.get('/', async (req, res) => {
  try {
    const source = await axios.get(`https://api.binance.com/api/v3/${type}?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
      headers: {
        'X-MBX-APIKEY': 'WEChhUrnOkBOtxPNISryrrCm73Hr36O2CKc2SWHHscB0qIyqkmRoPPTmH1REQA3W'
      }
    });
    res.send(source.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
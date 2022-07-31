const express = require('express');
const axios = require("axios");
const app = express.Router();
const binance = require('../../config/keys').binance;
const APIKEY = require('../../config/keys').binanceAPIKEY;

const type = 'klines';
const symbol = 'BTCUSDT';
const interval = '1M';
const limit = 1000;

app.get('/candle', async (req, res) => {
  try {
    const source = await axios.get(`${binance}/${type}?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
      headers: {
        'X-MBX-APIKEY': `${APIKEY}`
      }
    });
    res.send(source.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
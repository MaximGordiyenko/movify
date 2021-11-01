const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const api = 'https://api.binance.com/api/v3';
const type =  'exchangeInfo';
const symbols = 'symbols'
const currencies = ["BTCUSDT","BNBBTC"];
//'https://api.binance.com/api/v3/exchangeInfo?symbols=["BTCUSDT","BNBBTC"]'
console.log(`${api}/${type}?${symbols}=${currencies}`);

app.get('/cryptos', async (req, res) => {
  try {
    const source = await axios.get(`${api}/${type}?${symbols}=%5B%22BTCUSDT%22,%22BNBBTC%22%5D`);
    console.log(source.data);
    res.send(source.data);
  } catch (error) {
    console.log(error);
  }
  
});

app.listen(4000, () => {
  console.log('Post: 4000');
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const sha256 = require('js-sha256').sha256;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const api = 'https://api.binance.com/api/v3';
const type =  'klines';
const symbol = 'BTCUSDT';
const interval = '1M';
const limit = 1000;

app.get('/cryptos', async (req, res) => {
  try {
    const source = await axios.get(`https://api.binance.com/api/v3/${type}?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
      headers: {
        'X-MBX-APIKEY': 'WEChhUrnOkBOtxPNISryrrCm73Hr36O2CKc2SWHHscB0qIyqkmRoPPTmH1REQA3W'
      }
    });
    console.log(source.data);
    res.send(source.data);
  } catch (error) {
    console.log(error);
  }
});

// //https://www.npmjs.com/package/js-sha256
// const sapi = 'https://api.binance.com/sapi/v1';
// const params = 'timestamp=1636379284';
// const secretKey = 'Y9ws2UnblXVxSkqnYgQoLEdL4pdTdtLlmAqU1sntWIb2sgilQ4rPLwpnBE3sDtfS';
// const hashSignature = sha256.hmac(secretKey, params);
//
// app.get('/secure', async (req, res) => {
//   try{
//     const source = await axios.get(`${sapi}/capital/config/getall?${params}&signature=${hashSignature}`, {
//       headers: {
//         "X-MBX-APIKEY": "WEChhUrnOkBOtxPNISryrrCm73Hr36O2CKc2SWHHscB0qIyqkmRoPPTmH1REQA3W"
//       }
//     });
//     console.log('data is', source);
//     res.send(source);
//   } catch (error) {
//     console.log(error);
//   }
// });


app.listen(4000, () => {
  console.log('Server: 4000');
});
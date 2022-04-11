const express = require('express');
const app = express.Router();

app.post('/', async (req, res) => {
  try {
    const source = await req.body;
    console.log(source);
    return res.status(200).send(source);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
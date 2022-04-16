const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const candle = require('./routes/candleBTCUSDT');
const authenticate = require('./routes/authenticate');
const connectDB = require("./database/DB");
const PORT = require('./config/keys').serverPORT;
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
app.use(cors());

connectDB();

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// https://medium.com/swlh/node-js-router-and-routes-a4a3cfced5c4
app.use('/cryptos', candle)
app.use('/users/authenticate', authenticate)

app.listen(PORT, () => {
  console.log(`Server: ${PORT}`);
});
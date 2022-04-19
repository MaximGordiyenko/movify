const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require("./database/DB");
const passport = require("passport");
const PORT = require('./config/keys').serverPORT;
const users = require("./routes/api/users");
const btc = require('./routes/btcCandle');

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
// https://medium.com/swlh/node-js-router-and-routes-a4a3cfced5c4
app.use("/api/users", users);
app.use('/api/btc', btc)

app.listen(PORT, () => {
  console.log(`Server: ${PORT}`);
});
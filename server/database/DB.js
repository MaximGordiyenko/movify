const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;

const connectDB = async () => {
  try {
    const response = await mongoose.connect(db);
    console.log('connect to DB', !!response.connections);
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
  }
};

module.exports = connectDB;
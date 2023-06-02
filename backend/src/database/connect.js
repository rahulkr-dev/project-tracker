const mongoose = require('mongoose')
const {DB_URL} = require('../config')
async function connect() {
  try {
    mongoose.connect(DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
  } catch (err) {
    return console.log("Database not connected")
  }
}

module.exports = connect

const mongoose = require("mongoose");
const Config = require("../config");

const connect = async () => {
  try {
    const conn = await mongoose.connect(Config.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connect;

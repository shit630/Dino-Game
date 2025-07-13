const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("Failed to connect DB");
    console.log(error);
  }
};

module.exports = connectDB;

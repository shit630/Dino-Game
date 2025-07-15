const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
  token: { type: String },
});

const BlackListTokenModel = mongoose.model(
  "blackListToken",
  blackListTokenSchema
);

module.exports = BlackListTokenModel;

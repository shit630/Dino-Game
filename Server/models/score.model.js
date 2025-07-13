const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  score: { type: Number },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const ScoreModel = mongoose.model("Score", scoreSchema);

module.exports = ScoreModel;

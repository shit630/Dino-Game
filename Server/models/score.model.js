const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  highestScore: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});

const ScoreModel = mongoose.model("Score", scoreSchema);

module.exports = ScoreModel;

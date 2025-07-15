const express = require("express");
const authMiddleware = require("../middleware/authmiddleware");
const ScoreModel = require("../models/score.model");

const ScoreRoute = express.Router();

//achive higest score by user
ScoreRoute.post("/highest-score", authMiddleware, async (req, res) => {
  const { score } = req.body;
  if (typeof score !== "number") {
    return res.status(400).json({ message: "Score must be a number" });
  }
  try {
    let existingScore = await ScoreModel.findOne({ userId: req.userId });
    if (!existingScore) {
      const newScore = new ScoreModel({
        userId: req.userId,
        highestScore: score,
      });
      await newScore.save();
      return res.status(201).json({
        message: "Score saved successfully",
        highestScore: newScore.highestScore,
      });
    }

    if (score > existingScore.highestScore) {
      existingScore.highestScore = score;
      await existingScore.save();
    }

    res.status(200).json({
      message: "You have achieved the new highest score",
      highestScore: existingScore.highestScore,
    });
  } catch (error) {
    console.error("POST /highest-score Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

//leaderboard -> protected
ScoreRoute.get("/leaderboard", authMiddleware, async (req, res) => {
  try {
    const topScores = await ScoreModel.find()
      .sort({ highestScore: -1 })
      .limit(10)
      .populate("userId", "username email")
      .lean();
    let leaderboard = topScores.map((score) => {
      return {
        username: score.userId?.username,
        email: score.userId?.email,
        highestScore: score.highestScore,
      };
    });
    res.status(200).json(leaderboard);
  } catch (error) {
    console.error("GET /leaderboard Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = ScoreRoute;

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const UserRoute = require("./routes/user.route");
const ScoreRoute = require("./routes/score.route");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

connectDB();

app.use("/users", UserRoute);
app.use("/scores", ScoreRoute);

app.listen(8080, () => {
  console.log("Server Stated");
});

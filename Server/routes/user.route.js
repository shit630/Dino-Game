const express = require("express");
const UserModel = require("../models/user.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const saltRounds = 10;

const UserRoute = express.Router();

//signup
UserRoute.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }
    const myPlaintextPassword = password;
    bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        res.status(500).json({ msg: "Something went wrong" });
      } else {
        const newUser = await UserModel.create({ ...req.body, password: hash });
        var loginProof = jwt.sign(
          { userId: newUser._id },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d",
          }
        );

        res.status(201).json({
          msg: "User registered successfully",
          loginProof,
        });
      }
    });
  } catch (error) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//login
UserRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    } else {
      let hash = user.password;
      bcrypt.compare(password, hash, function (err, result) {
        // result == true
        if (err) {
          res.status(500).json({ msg: "Something went wrong" });
        } else {
          if (result) {
            var token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
              expiresIn: "7d",
            });
            res
              .cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
              })
              .status(200)
              .json({ msg: "Login success", loginProof: token });
          } else {
            res.status(404).json({ msg: "Wrong Password" });
          }
        }
      });
    }
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

//Forget password
UserRoute.post("/forget-password", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      var token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "15m",
      });
      let resetLink = `http://localhost:8080/users/reset-password?token=${token}`;
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      const info = await transporter.sendMail({
        from: '"Soumen Shit" <soumenshit907@gmail.com>',
        to: user.email,
        subject: "Password Reset Link",
        html: `<h3>Hello ${user.username},</h3>
        <p>You requested to reset your password. Click the link below to proceed:</p>
        <a href="${resetLink}">Reset Password</a>
        <p>This link is valid for 15 minutes.</p>`,
      });
      res.status(200).json({ message: "Reset link sent to your email." });
    }
  } catch (error) {
    console.error("Forgot Password Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

//reset password
UserRoute.post("/reset-password", async (req, res) => {
  const { token } = req.query;
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: "New password is required" });
  }
  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded) {
      const user = await UserModel.findById(decoded.userId);
      let myPlaintextPassword = req.body.password;
      bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
        if (err) {
          res.status(404).json({ msg: "Something went wrong" });
        } else {
          user.password = hash;
          await user.save();
          res.status(200).json({ message: "Password reset successful" });
        }
      });
    }
  } catch (error) {
    console.error("Reset Password Error:", error.message);
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

module.exports = UserRoute;

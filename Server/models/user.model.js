const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true, minlength: 3 },
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, require: true },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Capsule = require("./capsules");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
  capsules: { type: Schema.Types.ObjectId, ref: "capsules" },
});

// Modèle
const User = mongoose.model("users", userSchema);
module.exports = User;

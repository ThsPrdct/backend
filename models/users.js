const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Capsule = require("./capsules");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
  launches: [{ type: Schema.ObjectId, ref: "capsules" }],
});

// Modèle
const User = mongoose.model("users", userSchema);
module.exports = User;

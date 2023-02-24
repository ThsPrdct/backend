const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./users");

const capsuleSchema = new mongoose.Schema({
  author: String,
  content: String,
  likes: [],

  //the rest of profile fields
});

const Capsule = mongoose.model("capsules", capsuleSchema);
module.exports = Capsule;

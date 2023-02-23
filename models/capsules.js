const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const capsuleSchema = new Schema({
  author: String,
  content: String,

  //the rest of profile fields
});

module.exports = Capsule = mongoose.model("capsules", capsuleSchema);

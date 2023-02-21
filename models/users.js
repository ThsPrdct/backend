const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,  
});

// Modèle
const User = mongoose.model('users', userSchema);

module.exports = User;
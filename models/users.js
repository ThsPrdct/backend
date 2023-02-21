const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,  
  timbers: [
    {
      author: String,
      content: String,
      token: String,
      isLiked: Boolean,

    }
  ]
});

// Modèle
const User = mongoose.model('users', userSchema);

module.exports = User;
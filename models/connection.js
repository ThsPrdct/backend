const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Ths-Prodct:4d0sv2yWlQ00r9KZ@cluster0.zeevbh6.mongodb.net/timber';


mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
 
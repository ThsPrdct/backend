const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://ThsProdct:TQVzLbr7qb6eU2xM@cluster0.km1if0d.mongodb.net/timber';


mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
 
const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://thsprodct:ATOFqtpn59h5oJwc@capsule.iu9wam3.mongodb.net/test";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));

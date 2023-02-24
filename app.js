require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("./models/connections");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var capsulesRouter = require("./routes/capsules");
/*var timbersRouter = require('./routes/timbers');*/

var app = express();

const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/capsules", capsulesRouter);
/*app.use('/timbers', timbersRouter);*/

module.exports = app;

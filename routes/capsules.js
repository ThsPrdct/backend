const express = require("express");
const router = express.Router();
const Capsule = require("../models/capsules");
const { checkBody } = require("../modules/checkBody");
require("../models/connections");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");
const User = require("../models/users");
const fetch = require("node-fetch");
const { response } = require("express");

router.post("/launches", (req, res) => {
  if (!checkBody(req.body, ["content"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  const newCapsule = new Capsule({
    author: req.body.author,
    content: req.body.content,
    likes: [],
  });

  newCapsule.save().then(() => {
    res.json({ result: true });
  });
});

//get all capsules  //get all capsules

module.exports = router;

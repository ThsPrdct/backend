const express = require("express");
const router = express.Router();
const Capsule = require("../models/capsules");
const { checkBody } = require("../modules/checkBody");
require("../models/connections");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");

router.post("/launches", (req, res) => {
  if (!checkBody(req.body, ["content"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  User.findOne({ username: req.body.token }).then((data) => {
    const newCapsule = new Capsule({
      author: data.username,
      content: req.body.content,
    });
    newCapsule.save().then((newDoc) => {
      res.json({ result: true, capsule: newDoc.token });
    });
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();
const Capsule = require("../models/capsules");

router.get("/capsules", (req, res) => {
  Capsule.find().then((data) => {
    if (data.status === "ok") {
      res.json({ capsules: data.capsules });
    } else {
      res.json({
        capsules: [],
      });
    }
  });
});

module.exports = router;

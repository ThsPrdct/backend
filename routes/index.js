var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');


router.get('/trends', (req, res) => {
  fetch('http://localhost:3001/feed/:token')
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

module.exports = router;

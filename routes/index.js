var express = require('express');
var router = express.Router();
var Vastaus = require('../model.js').Vastaus;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/vastaukset", function (req, res) {
  Vastaus.find(function (err, vastaukset) {
    if (err) return console.error(err);
    console.log(vastaukset);
    res.render('vastaukset', { vastaukset: vastaukset });

  });
});

router.post("/supersankari", function (req, res) {
  var nimi = req.body.nimi;
  var supersankari = req.body.supersankari;

  Vastaus.create({
    nimi: nimi,
    supersankari: supersankari
  }).then(function () {
    res.send(nimi + " " + supersankari);
  },
    function () {
      res.status(500).send("Tietokantavirhe");
    });
});


module.exports = router;

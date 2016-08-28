var express = require('express');
var router = express.Router();
let db = require("../lib/db");

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/:link", (req, res, next) => {

    db.LinkModel.findOne({shortLink: req.params.link}, (err, link) => {

        if (err) {
            console.log(err);
            return;
        }

        if (link) {
            console.log("Redirected!");
            res.redirect("http://" + link.fullLink);
        }
    });
});

module.exports = router;

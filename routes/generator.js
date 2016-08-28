let crypto = require("crypto");
let express = require('express');
let router = express.Router();
let db = require("../lib/db");

let algorithm = 'aes-256-ctr';
let password = 'd6F3Efeq';

function encrypt(data) {

    let cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(data, "utf8", "hex");

    crypted += cipher.final("hex");

    return crypted;
}

router.get('/', function(req, res) {

    res.status(403);
    res.send("Access denied!")

});

router.post("/:fullLink", (req, res, next) => {

    let fullLink = req.params.fullLink;
    let shortLink, linkModel;

    shortLink = encrypt(fullLink);

    db.LinkModel.findOne({
        shortLink: shortLink,
        fullLink: fullLink
    }, (err, link) => {

        if (!link) {

            console.log("Link not found! Register new entry...");

            linkModel = new db.LinkModel({
                shortLink: shortLink,
                fullLink: fullLink
            });

            linkModel.save();

        }

        res.send(`localhost:3000/${shortLink}`);

    });
});

module.exports = router;

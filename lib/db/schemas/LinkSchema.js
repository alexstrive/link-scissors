let mongoose = require("mongoose");

let LinkSchema = new mongoose.Schema({
    shortLink: String,
    fullLink: String
});

module.exports = LinkSchema;
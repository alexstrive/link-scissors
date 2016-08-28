let mongoose = require("mongoose");
// Load schemas
let LinkSchema = require("./schemas/LinkSchema");
// Apply schemas to models
let Link = mongoose.model("link", LinkSchema);

mongoose.connect("mongodb://localhost/linkscissors");

exports.LinkModel = Link;
exports.mongoose = mongoose;
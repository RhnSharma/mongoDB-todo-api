var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI);
module.exports = { mongoose };

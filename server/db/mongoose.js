var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.URI,
  {
    useMongoClient: true
  }
);
module.exports = { mongoose };

const mongoose = require("mongoose");

const ResponseSchema = mongoose.Schema({
  rating: {
    type: Number,
  },
  satisfaction: {
    type: String,
  },
  communication: {
    type: String,
  },
  comments: {
    type: String,
  },
});

module.exports = mongoose.model("Response", ResponseSchema);

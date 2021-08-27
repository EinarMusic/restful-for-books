const mongoose = require("mongoose");

const ReadLater = mongoose.Schema({
  nameList: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  list: {
    type: String,
    default: "ReadLater"
  },
  myBooks: [
    {
      authors: { type: String, require: true },
      title: { type: String, require: true },
      book: { type: Array, require: true }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("readlater", ReadLater);

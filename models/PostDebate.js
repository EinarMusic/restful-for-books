const mongoose = require("mongoose");

const DebateSchema = mongoose.Schema({
  books: {
    type: [String],
    require: true
  },
  readList: {
    type: String,
    require: true
  },
  list: {
    type: String,
    require: true
  },
  a_writtenPost: {
    type: String,
    require: true
  },
  public_metrics: {
    type: Map,
    of: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("debate", DebateSchema);

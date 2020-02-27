const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailSchema = mongoose.Schema(
  {
    num: {
      type: Number
    },
    sex: {
      type: String
    },

    age: {
      type: String
    },

    place: {
      type: String
    },
    root: {
      type: String
    }
  },
  { timestamps: true }
);

const Detail = mongoose.model("Detail", detailSchema);

module.exports = { Detail };

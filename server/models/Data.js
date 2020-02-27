const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = mongoose.Schema(
  {
    dujeong_p: {
      type: Number
    },
    dujeong_d: {
      type: Number
    },
    buldang_p: {
      type: Number
    },
    buldang_d: {
      type: Number
    },
    today: {
      type: Number
    },

    sum: {
      type: Number
    },
    may: {
      type: Number
    },
    email: {
      type: String
    }
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = { Data };

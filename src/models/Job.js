const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    _id: String,

    type: {
      type: String,
      required: true
    },

    payload: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    },

    status: {
      type: String,
      default: "PENDING"
    },

    result: {
      type: mongoose.Schema.Types.Mixed,
      default: null
    }
  },
  {
    timestamps: true
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
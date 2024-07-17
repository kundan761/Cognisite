const mongoose = require("mongoose");

const CalculateSchema = mongoose.Schema({
  length: Number,
  width: Number,
  wallHeight: Number,
  numMasons: Number,
  workPerDay: Number,
  startDate: Date,
  perimeter: Number,
  daysRequired: Number,
  endDate: Date,
},{
    versionKey: false,
});

const CalculateModel = mongoose.model("Data", CalculateSchema);

module.exports = { CalculateModel };

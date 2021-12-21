const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number"],
  },
  date: {
    type: String,
    required: [true, "Please add a date"],
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  user: { type: Schema.Types.Mixed, required: true },
  account: { type: Schema.Types.Mixed, required: true },
  date: Number,
  expenseAmount: { type: Number, required: false },
  expenseCategory: { type: Schema.Types.Mixed, required: false },
  expenseSubCategory: { type: Schema.Types.Mixed, required: false },
  incomeAmount: { type: Number, required: false },
  incomeCategory: { type: Schema.Types.Mixed, required: false },
  incomeSubCategory: { type: Schema.Types.Mixed, required: false },
  transferTo: { type: Schema.Types.Mixed, required: false },
  transferAmount: { type: Number, required: false },
  transferFees: { type: Number, required: false },
  note: { type: String, required: false },
  image: { type: String, required: false },
});

module.exports = mongoose.model("transactions", transactionSchema);

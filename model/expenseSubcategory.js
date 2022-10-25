const mongoose = require("mongoose");
const {Schema} = mongoose;

const expenseSubCategorySchema = new Schema({
  user: Schema.Types.ObjectId,
  expenseCategory: Schema.Types.ObjectId,
  name: {type: String, unique: true},
});

module.exports = mongoose.model("expense_subcategories", expenseSubCategorySchema);

const mongoose = require("mongoose");
const {Schema} = mongoose;

const expenseCategorySchema = new Schema({
  user: Schema.Types.ObjectId,
  name: {type: String, unique: true},
});

module.exports = mongoose.model("expense_categories", expenseCategorySchema);

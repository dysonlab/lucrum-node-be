const mongoose = require("mongoose");
const {Schema} = mongoose;

const incomeSubCategorySchema = new Schema({
  user: Schema.Types.ObjectId,
  incomeCategory: Schema.Types.ObjectId,
  name: {type: String, unique: true},
});

module.exports = mongoose.model("income_subcategories", incomeSubCategorySchema);

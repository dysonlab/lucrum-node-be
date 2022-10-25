const mongoose = require("mongoose");
const {Schema} = mongoose;

const incomeCategorySchema = new Schema({
  user: Schema.Types.ObjectId,
  name: {type: String, unique: true},
});

module.exports = mongoose.model("income_categories", incomeCategorySchema);

const mongoose = require("mongoose");
const {Schema} = mongoose;

const accountSchema = new Schema({
  user: Schema.Types.ObjectId,
  accountGroup: Schema.Types.ObjectId,
  name: String,
  amount: Number,
  description: String,
});

module.exports = mongoose.model("accounts", accountSchema);

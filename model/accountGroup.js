const mongoose = require("mongoose");
const {Schema} = mongoose;

const accountGroupSchema = new Schema({
  user: Schema.Types.ObjectId,
  name: {type: String, unique: true},
});

module.exports = mongoose.model("account_groups", accountGroupSchema);

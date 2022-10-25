const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: String, unique: true},
  phone: String,
  password: String,
  createdAt: Number,
  lastLogon: Number,
});

// middleware hash password
userSchema.pre("save", function(next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.hash(user.password, 10, function(error, hash) {
      if (error) {
        return next(error);
      }
      user.password = hash;
      next();
    });
  } else {
    return next();
  }
});

// method
userSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if (error) {
      return callback(error);
    } else {
      callback(null, isMatch);
    }
  });
};

module.exports = mongoose.model("users", userSchema);
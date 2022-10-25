const {user} = require("../model");

exports.login = (req, res) => {
  // deconstruct request body
  const {email, password} = req.body;
  // find user with email, then update lastLogon
  user.findOneAndUpdate({email: email}, {lastLogon: Date.now()}, {new: true}, (error, user) => {
    if (error) {
      console.log(error);
      return res.status(500).json({message: "internal server error"});
    } else {
      user.comparePassword(password, function(error, isMatch) {
        if (error) {
          console.log(error);
        }
        if (isMatch) {
          console.log(`login success ${user._id}`);
          return res.status(200).json({message: `login success ${user._id}`});
        } else {
          console.log(`login failed ${user._id}`);
          return res.status(401).json({message: "unauthorized access"});
        }
      });
    }
  });
};

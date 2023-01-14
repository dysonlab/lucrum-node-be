const { user } = require("../model");
const { signToken } = require("../service/token");

exports.login = (req, res) => {
  // deconstruct request body
  const { email, password } = req.body;

  // find user with email, then update lastLogon
  user.findOneAndUpdate({ email: email }, { lastLogon: Date.now() }, { new: true }, (error, user) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "internal server error" });
    }

    if(user === null){
      return res.status(404).json({ message: `user with email ${email} is not found`});
    }

    user.comparePassword(password, function (error, isMatch) {
      if (error) {
        console.log(error);
        res.status(404).json({ message: "user not found" });
      }
      if (isMatch) {
        console.log(`login success ${user._id}`);
        const token = signToken({
          user: user._id,
          email: user.email,
          name: user.name,
          lastLogon: user.lastLogon,
        })
        return res.status(200).json({ message: `login success ${user._id}`, token: token });
      } 
      if(!isMatch){
        console.log(`login failed ${user._id}`);
        return res.status(401).json({ message: "unauthorized access" });
      }
    });

  });
};
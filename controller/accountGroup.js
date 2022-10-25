const {account_group} = require("../model");

exports.createAccountGroup = (req, res) => {
  // deconstruct request body
  const {user, name} = req.body;
  // create model
  const newAccountGroup = new account_group({
    user: user,
    name: name,
  });
  // create new account group
  newAccountGroup.save((error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({message: "internal server error"});
    } else {
      console.log(`success create account group ${result.name} ${result._id}`);
      return res.status(200).json({message: `success create account group ${result._id}`, user: result});
    }
  });
};

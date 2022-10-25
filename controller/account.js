const {account} = require("../model");

exports.createAccount = (req, res) => {
  // deconstruct request body
  const {user, accountGroup, name, amount, description} = req.body;
  console.log(req.body);
  // create model
  const newAccount = new account({
    user: user,
    accountGroup: accountGroup,
    name: name,
    amount: amount,
    description: description,
  });
  // create new account
  newAccount.save((error, result) => {
    if (error) {
      console.log(error);
      if (error.code === 11000) {
        return res.status(409).json({message: `account ${name} already exists`});
      }
      return res.status(500).json({message: "internal server error"});
    } else {
      console.log(`success create account ${result._id}`);
      return res.status(200).json({message: `success create accoutn ${result._id}`, account: result});
    }
  });
};

const {account} = require("../model");

exports.createAccount = async (req, res) => {
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

exports.deleteAccount = async (req, res) => {
  // deconstruct request params
  const { accountId } = req.params;

  try{
    await account.deleteOne({ _id: accountId}).exec();
    return res.status(200).json({message: `account ${accountId} is deleted`})
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: "internal server error" });
  }
}

exports.getAccount = async (req, res) => {
  // deconstruct request params
  const { userId } = req.params;

  try{
    const result = await account.find({user:userId}).exec()
    return res.status(200).json({ message: `success get account`, account: result });
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: `cannot find account from user ${userId}` });
  }
}

exports.updateAccount = async (req, res) => {
  // deconstruct request params
  const { accountId } = req.params;
  // deconstruct request body
  const { accountGroup, name, amount, description } = req.body;
  
  try{
    const result = await account.findByIdAndUpdate(accountId, {
      accountGroup: accountGroup,
      name: name,
      amount: amount,
      description: description
    }, {new: true}).exec()
    return res.status(200).json({ message: `success update account ${result._id}`, account: result });
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: `error updating account ${accountId}` });
  }
} 
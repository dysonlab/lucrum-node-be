const {account_group} = require("../model");

exports.createAccountGroup = (req, res) => {
  // deconstruct request body
  const { user, name } = req.body;
  // create model
  const newAccountGroup = new account_group({
    user: user,
    name: name,
  });
  // create new account group
  newAccountGroup.save((error, result) => {
    if (error) {
      console.log(error);
      if (error.code === 11000) {
        return res.status(409).json({ message: `account group ${name} already exists` });
      }
      return res.status(500).json({message: "internal server error"});
    } else {
      console.log(`success create account group ${result.name} ${result._id}`);
      return res.status(200).json({message: `success create account group ${result._id}`, user: result});
    }
  });
};

exports.deleteAccoutGroup = async (req, res) => {
  // deconstruct request params
  const { accountGroupId } = req.params;

  try{
    account_group.deleteMany({ _id: accountGroupId }).exec();
    return res.status(200).json({ message: `account group ${accountGroupId} is deleted`});
  } catch (error){
    return res.status(500).json({ message: "internal server error" });
  }
}

exports.getAccountGroup = async (req, res) => {
  // deconstruct request params
  const { userId } = req.params;
  console.log(userId)
  try{
    const result = await account_group.find({user:userId}).exec()
    return res.status(200).json({ message: `success get account groups`, accountGroup: result });
  }catch(error){
    return res.status(500).json({ message: `cannot find account group from user ${userId}` });
  }
}

exports.updateAccountGroup = async (req, res) => {
  // deconstruct request params
  const { accountGroupId } = req.params;
  // deconstruct request body
  const { name } = req.body;
  
  try{
    const result = await account_group.findByIdAndUpdate(accountGroupId, {
      name: name
    }).exec()
    return res.status(200).json({ message: `success update account group ${result._id}`, account_group: result });
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: `error updating account group ${accountGroupId}` });
  }
}
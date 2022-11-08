const { account, account_group, expense_category, expense_subcategory, income_category, income_subcategory, transaction, user } = require("../model");

exports.createUser = (req, res) => {
  // deconstruct request body
  const { firstName, lastName, email, phone, password } = req.body;
  // create model
  const newUser = new user({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    password: password,
    createdAt: Date.now(),
    lastLogon: Date.now(),
  });
  // create new user
  newUser.save((error, result) => {
    if (error) {
      console.log(error);
      if (error.code === 11000) {
        return res.status(409).json({ message: `user ${email} already exists` });
      }
      return res.status(500).json({ message: "internal server error" });
    } else {
      console.log(`success create user ${result._id}`);
      return res.status(200).json({ message: `success create user ${result._id}`, user: result });
    }
  });
};

exports.deleteUser = async (req, res) => {
  // deconstruct request params
  const { userID } = req.params;

  try {
    // delete all records
    account.deleteMany({ user: userID }).exec();
    account_group.deleteMany({ user: userID }).exec();
    expense_category.deleteMany({ user: userID }).exec();
    expense_subcategory.deleteMany({ user: userID }).exec();;
    income_category.deleteMany({ user: userID }).exec();
    income_subcategory.deleteMany({ user: userID }).exec();
    transaction.deleteMany({ user: userID }).exec();
    user.deleteOne({ _id: userID }).exec();
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }

  return res.status(200).json({ message: `user ${userID} is deleted` });
}

exports.getUser = async (req, res) => {
  // deconstruct request params
  const { userID } = req.params;

  try {
    const result = await user.findById({ _id: userID }).exec()
    return res.status(200).json({ message: `success get user ${result._id}`, user: result });
  }catch(error){
    return res.status(500).json({ message: `cannot find user ${userID}` });
  }
}

exports.updateUser = async (req, res) => {
  // deconstruct request params
  const { userID } = req.params;
  // deconstruct request body
  const { firstName, lastName, email, phone } = req.body;
  console.log(req.body)
  try {
    const result = await user.findByIdAndUpdate(userID, {
      firstName: firstName, 
      lastName: lastName, 
      email: email, 
      phone: phone,
    }).exec();
    return res.status(200).json({ message: `success update user ${result._id}`, user: result });
  }catch(error){
    return res.status(500).json({ message: `error updating user ${userID}` });
  }
}
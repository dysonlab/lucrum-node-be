const { account, account_group, expense_category, expense_subcategory, income_category, income_subcategory, transaction, user } = require("../model");
const { sendConfirmationEmail } = require("../service/mailing/email")
exports.createUser = async (req, res) => {
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
  newUser.save(async(error, result) => {
    if (error) {
      console.log(error);
      if (error.code === 11000) {
        return res.status(409).json({ message: `user ${email} already exists` });
      }
      return res.status(500).json({ message: "internal server error" });
    }
    console.log(`success create user ${result._id}`);
    await sendConfirmationEmail(result);
    return res.status(200).json({ message: `success create user ${result._id}`, user: result });
  });
};

exports.deleteUser = async (req, res) => {
  // deconstruct request params
  const { userId } = req.params;

  try {
    // delete all records
    await account.deleteMany({ user: userId }).exec();
    await account_group.deleteMany({ user: userId }).exec();
    await expense_category.deleteMany({ user: userId }).exec();
    await expense_subcategory.deleteMany({ user: userId }).exec();;
    await income_category.deleteMany({ user: userId }).exec();
    await income_subcategory.deleteMany({ user: userId }).exec();
    await transaction.deleteMany({ user: userId }).exec();
    await user.deleteOne({ _id: userId }).exec();
    return res.status(200).json({ message: `user ${userId} is deleted` });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "internal server error" });
  }
}

exports.getUser = async (req, res) => {
  // deconstruct request params
  const { userId } = req.params;

  try {
    const result = await user.findById({ _id: userId }).exec()
    return res.status(200).json({ message: `success get user ${result._id}`, user: result });
  } catch (error) {
    return res.status(500).json({ message: `cannot find user ${userId}` });
  }
}

exports.updateUser = async (req, res) => {
  // deconstruct request params
  const { userId } = req.params;
  // deconstruct request body
  const { firstName, lastName, email, phone } = req.body;
  console.log(req.body)
  try {
    const result = await user.findByIdAndUpdate(userId, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    }).exec();
    return res.status(200).json({ message: `success update user ${result._id}`, user: result });
  } catch (error) {
    return res.status(500).json({ message: `error updating user ${userId}` });
  }
}

exports.verifyEmail = async (req, res) => {
  // deconstruct request params
  const { userId } = req.params;
  try {
    const result = await user.findByIdAndUpdate(userId, {
      isEmailVerified : true,
    }).exec();
    return res.status(200).json({ message: `success verify email user ${result._id}`, user: result });
  } catch (error) {
    return res.status(500).json({ message: `error verify email user ${userId}` });
  }
}
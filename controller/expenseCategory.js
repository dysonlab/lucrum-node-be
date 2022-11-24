const {expense_category} = require("../model");

exports.createExpenseCategory = async (req, res) => {
  // deconstrcut request body
  const {user, name} = req.body;
  // create  model
  const newExpenseCategory = new expense_category({
    user: user,
    name: name,
  });
  // create new expense category
  newExpenseCategory.save((error, result) => {
    if (error) {
      console.log(error);
      if (error.code === 11000) {
        return res.status(409).json({message: `expense category ${name} already exists`});
      }
      return res.status(500).json({message: "internal server error"});
    } else {
      console.log(`success create expense category ${result._id}`);
      return res.status(200).json({message: `success create expense category ${result._id}`, expenseCategory: result});
    }
  });
};

exports.deleteExpenseCategory = async (req, res) => {
  // deconstruct request params
  const { expenseCategoryId } = req.params;

  try{
    await expense_category.deleteOne({ _id: expenseCategoryId}).exec();
    return res.status(200).json({message: `expnese ${expenseCategoryId} is deleted`})
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: "internal server error" });
  }
}

exports.getExpenseCategory = async (req, res) => {
  // deconstruct request params
  const { userId } = req.params;

  try{
    const result = await expense_category.find({user:userId}).exec()
    return res.status(200).json({ message: `success get expense category`, expenseCategory: result });
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: `cannot find expense category from user ${userId}` });
  }
}

exports.updateExpenseCategory = async (req, res) => {
  // deconstruct request params
  const { expenseCategoryId } = req.params;
  // deconstruct request body
  const { name } = req.body;
  
  try{
    const result = await expense_category.findByIdAndUpdate(expenseCategoryId, {
      name: name
    }, {new: true}).exec()
    return res.status(200).json({ message: `success update expense category ${result._id}`, expenseCategory: result });
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: `error updating expense category ${expenseCategoryId}` });
  }
}
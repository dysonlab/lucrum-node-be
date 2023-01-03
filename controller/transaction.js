const {transaction} = require("../model");

exports.createTransaction = (req, res) => {
  // deconstruct request body
  const {
    user,
    account,
    expenseAmount,
    expenseCategory,
    expenseSubCategory,
    incomeAmount,
    incomeCategory,
    incomeSubCategory,
    transferAmount,
    transferTo,
    transferFees,
    note,
  } = req.body;
  // create model
  const newTransaction = new transaction({
    user: user,
    account: account,
    date: Date.now(),
    expenseAmount: expenseAmount,
    expenseCategory: expenseCategory,
    expenseSubCategory: expenseSubCategory,
    incomeAmount: incomeAmount,
    incomeCategory: incomeCategory,
    incomeSubCategory: incomeSubCategory,
    transferTo: transferTo,
    transferAmount: transferAmount,
    transferFees: transferFees,
    note: note,
    image: "",
  });
  // create new transaction
  newTransaction.save((error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({message: "internal server error"});
    } else {
      console.log(`success create transaction ${result._id}`);
      return res.status(200).json({message: `success create transaction ${result._id}`, transaction: result});
    }
  });
};

exports.getTransaction = async (req, res) => {
  // deconstruct request body
  const { userId } = req.params;
  // find by user id
  try{
    const result = await transaction.find({user:userId}).exec()
    console.log(userId)
    console.log(result)
    return res.status(200).json({ message: `success get expense category`, transaction: result });
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: `cannot find expense category from user ${userId}` });
  }
};

exports.updateTransaction = (req, res) => {
  // deconstruct request paramaters
  const {transactionId} = req.params;
  // deconstruct request body
  const {
    account,
    date,
    expenseAmount,
    expenseCategory,
    expenseSubCategory,
    incomeAmount,
    incomeCategory,
    incomeSubCategory,
    transferAmount,
    transferTo,
    transferFees,
    note, 
  } = req.body;
  // find by id and update
  transaction.findByIdAndUpdate(transactionId, {
    account: account,
    date: date,
    expenseAmount: expenseAmount,
    expenseCategory: expenseCategory,
    expenseSubCategory: expenseSubCategory,
    incomeAmount: incomeAmount,
    incomeCategory: incomeCategory,
    incomeSubCategory: incomeSubCategory,
    transferTo: transferTo,
    transferAmount: transferAmount,
    transferFees: transferFees,
    note: note,
    image: "",
  }, {new: true}, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({message: "internal server error"});
    } else {
      return res.status(200).json({message: "success update transactions", transaction: result});
    }
  });
};

exports.deleteTransaction = (req, res) => {
  // deconstruct request paramaters
  const { transactionId } = req.params;
  // delete transaction
  transaction.findByIdAndDelete(transactionId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({message: "internal server error"});
    } else {
      return res.status(200).json({message: `success delete transaction ${result._id}`});
    }
  });
};

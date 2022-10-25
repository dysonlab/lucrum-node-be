const {transaction} = require("../model");

exports.createTransaction = (req, res) => {
  // deconstruct request body
  const {
    user,
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
    image,
  } = req.body;
  // create model
  const newTransaction = new transaction({
    user: user,
    account: account,
    // date input should be generated from client
    // *for testing only*
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
    image: image,
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

exports.readTransactions = (req, res) => {
  // deconstruct request body
  const {user} = req.body;
  // find by user id
  transaction.find({user: user}, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({message: "internal server error"});
    } else {
      return res.status(200).json({message: "success read transactions", transactions: result});
    }
  });
};

exports.updateTransaction = (req, res) => {
  // deconstruct request paramaters
  const {_id} = req.params;
  // deconstruct request body
  const {newTransaction} = req.body;
  // find by id and update
  transaction.findByIdAndUpdate(_id, newTransaction, {new: true}, (error, result) => {
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
  const {_id} = req.params;
  // delete transaction
  transaction.findByIdAndDelete(_id, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({message: "internal server error"});
    } else {
      return res.status(200).json({message: `success delete transaction ${result._id}`});
    }
  });
};

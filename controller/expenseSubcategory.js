const {expense_subcategory} = require("../model");

exports.createExpenseSubcategory = (req, res) => {
    // deconstruct request body
    const {user, expenseCategory, name} = req.body;
    // create model
    const newExpenseSubCategory = new expense_subcategory({
      user: user,
      expenseCategory: expenseCategory,
      name: name,
    });
    // create new expense sub category
    newExpenseSubCategory.save((error, result) => {
      if (error) {
        console.log(error);
        if (error.code === 11000) {
          return res.status(409).json({message: `expense sub category ${name} already exists`});
        }
        return res.status(500).json({message: "internal server error"});
      } else {
        console.log(`success create expense sub category ${result._id}`);
        return res.status(200).json({message: `success create expense sub category ${result._id}`, expenseSubCategory: result});
      }
    });
  };
  
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
  
  exports.deleteExpenseSubcategory = async (req, res) => {
    // deconstruct request params
    const { expenseSubcategoryId } = req.params;
  
    try{
      await expense_subcategory.deleteOne({ _id: expenseSubcategoryId}).exec();
      return res.status(200).json({message: `expense subcategory ${expenseSubcategoryId} is deleted`})
    }catch(error){
      console.log(error)
      return res.status(500).json({ message: "internal server error" });
    }
  }

  exports.getExpenseSubcategory = async (req, res) => {
    // deconstruct request params
    const { userId } = req.params;
  
    try{
      const result = await expense_subcategory.find({user:userId}).exec()
      return res.status(200).json({ message: `success get expense category`, expenseSubcategory: result });
    }catch(error){
      console.log(error)
      return res.status(500).json({ message: `cannot find expense category from user ${userId}` });
    }
  }

  exports.updateExpenseSubcategory = async (req, res) => {
    // deconstruct request params
    const { expenseSubcategoryId } = req.params;
    // deconstruct request body
    const { expenseCategory, name } = req.body;
    
    try{
      const result = await expense_subcategory.findByIdAndUpdate(expenseSubcategoryId, {
        expenseCategory: expenseCategory,
        name: name
      }, {new: true}).exec()
      return res.status(200).json({ message: `success update expense category ${result._id}`, expenseSubcategory: result });
    }catch(error){
      console.log(error)
      return res.status(500).json({ message: `error updating expense category ${expenseSubcategoryId}` });
    }
  }
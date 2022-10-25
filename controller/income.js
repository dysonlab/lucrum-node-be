const {income_category, income_subcategory} = require("../model");

exports.createIncomeCategory = (req, res) => {
  // deconstrcut request body
  const {user, name} = req.body;
  // create  model
  const newIncomeCategory = new income_category({
    user: user,
    name: name,
  });
  // create new income category
  newIncomeCategory.save((error, result) => {
    if (error) {
      console.log(error);
      if (error.code === 11000) {
        return res.status(409).json({message: `income category ${name} already exists`});
      }
      return res.status(500).json({message: "internal server error"});
    } else {
      console.log(`success create income category ${result._id}`);
      return res.status(200).json({message: `success create income category ${result._id}`, incomeCategory: result});
    }
  });
};

exports.createIncomeSubCategory = (req, res) => {
  // deconstruct request body
  const {user, incomeCategory, name} = req.body;
  // create model
  const newIncomeSubCategory = new income_subcategory({
    user: user,
    incomeCategory: incomeCategory,
    name: name,
  });
  // create new income sub category
  newIncomeSubCategory.save((error, result) => {
    if (error) {
      console.log(error);
      if (error.code === 11000) {
        return res.status(409).json({message: `income sub category ${name} already exists`});
      }
      return res.status(500).json({message: "internal server error"});
    } else {
      console.log(`success create income sub category ${result._id}`);
      return res.status(200).json({message: `success create income sub category ${result._id}`, incomeSubCategory: result});
    }
  });
};

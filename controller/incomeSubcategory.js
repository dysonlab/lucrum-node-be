const {income_subcategory} = require("../model");

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

exports.deleteIncomeSubcategory = async (req, res) => {
  // deconstruct request params
  const { incomeSubcategoryId } = req.params;

  try{
    await income_subcategory.deleteOne({ _id: incomeSubcategoryId}).exec();
    return res.status(200).json({message: `income subcategory ${incomeSubcategoryId} is deleted`})
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: "internal server error" });
  }
}

exports.getIncomeSubcategory = async (req, res) => {
  // deconstruct request params
  const { userId } = req.params;

  try{
    const result = await income_subcategory.find({user:userId}).exec()
    return res.status(200).json({ message: `success get income category`, incomeSubcategory: result });
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: `cannot find income category from user ${userId}` });
  }
}

exports.updateIncomeSubcategory = async (req, res) => {
  // deconstruct request params
  const { incomeSubcategoryId } = req.params;
  // deconstruct request body
  const { incomeCategory, name } = req.body;
  
  try{
    const result = await income_subcategory.findByIdAndUpdate(incomeSubcategoryId, {
      incomeCategory: incomeCategory,
      name: name
    }, {new: true}).exec()
    return res.status(200).json({ message: `success update income category ${result._id}`, incomeSubcategory: result });
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: `error updating income category ${incomeSubcategoryId}` });
  }
}
const {income_category} = require("../model");

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

exports.deleteIncomeCategory = async (req, res) => {
    // deconstruct request params
    const { incomeCategoryId } = req.params;
  
    try{
      await income_category.deleteOne({ _id: incomeCategoryId}).exec();
      return res.status(200).json({message: `income category ${incomeCategoryId} is deleted`})
    }catch(error){
      console.log(error)
      return res.status(500).json({ message: "internal server error" });
    }
  }
  
  exports.getIncomeCategory = async (req, res) => {
    // deconstruct request params
    const { userId } = req.params;
  
    try{
      const result = await income_category.find({user:userId}).exec()
      return res.status(200).json({ message: `success get income category`, incomeCategory: result });
    }catch(error){
      console.log(error)
      return res.status(500).json({ message: `cannot find income category from user ${userId}` });
    }
  }
  
  exports.updateIncomeCategory = async (req, res) => {
    // deconstruct request params
    const { incomeCategoryId } = req.params;
    // deconstruct request body
    const { name } = req.body;
    
    try{
      const result = await income_category.findByIdAndUpdate(incomeCategoryId, {
        name: name
      }, {new: true}).exec()
      return res.status(200).json({ message: `success update income category ${result._id}`, incomeCategory: result });
    }catch(error){
      console.log(error)
      return res.status(500).json({ message: `error updating income category ${incomeCategoryId}` });
    }
  }
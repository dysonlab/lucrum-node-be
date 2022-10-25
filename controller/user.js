const {user} = require("../model");

exports.createUser = (req, res) => {
  // deconstruct request body
  console.log(req.body);
  const {firstName, lastName, email, phone, password} = req.body;
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
        return res.status(409).json({message: `user ${email} already exists`});
      }
      return res.status(500).json({message: "internal server error"});
    } else {
      console.log(`success create user ${result._id}`);
      return res.status(200).json({message: `success create user ${result._id}`, user: result});
    }
  });
};

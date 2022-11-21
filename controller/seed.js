const { account, account_group, expense_category, expense_subcategory, income_category, income_subcategory, transaction } = require("../model");
const Seeder = require("../util/seeder");

exports.populate = async (req, res) => {
    // deconstruct request body
    const { userId } = req.body;
    const userSeed = new Seeder(userId);
    
    userSeed.seedAccoutGroup()
    userSeed.accoutGroup = await account_group.insertMany(userSeed.accoutGroup);

    userSeed.seedAccount()
    userSeed.account = await account.insertMany(userSeed.account);
    userSeed.setAccountConfig()

    userSeed.seedExpenseCategory()
    userSeed.expenseCategory = await expense_category.insertMany(userSeed.expenseCategory);
    userSeed.setExpenseCategoryConfig()

    userSeed.seedExpenseSubcategory()
    userSeed.expenseSubcategory = await expense_subcategory.insertMany(userSeed.expenseSubcategory);

    userSeed.seedIncomeCategory()
    userSeed.incomeCategory = await income_category.insertMany(userSeed.incomeCategory);

    userSeed.seedGenerateTransactionDate();
    userSeed.seedTransacion();
    userSeed.transactions = await transaction.insertMany(userSeed.transactions);
    
    return res.status(200).json({ message: "seed populated" });
}

exports.terminate = async (req, res) => {
    const { userId } = req.body;
    account.deleteMany({ user: userId }).exec();
    account_group.deleteMany({ user: userId }).exec();
    expense_category.deleteMany({ user: userId }).exec();
    expense_subcategory.deleteMany({ user: userId }).exec();;
    income_category.deleteMany({ user: userId }).exec();
    income_subcategory.deleteMany({ user: userId }).exec();
    transaction.deleteMany({ user: userId }).exec();

    return res.status(200).json({ message: "seed terminated" });
}
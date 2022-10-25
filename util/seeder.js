const { faker } = require("@faker-js/faker")

class Seeder {
    constructor(userID) {
        this.userID = userID;
        this.accoutGroup = [
            {
                user: "Seed",
                name: "Cash",
            },
            {
                user: "Seed",
                name: "Debit Card",
            },
            {
                user: "Seed",
                name: "Credit Card",
            },
            {
                user: "Seed",
                name: "E Wallet",
            },
            {
                user: "Seed",
                name: "Investment & Savings",
            },
        ];
        this.account = [
            {
                user: "Seed",
                accountGroup: "Cash",
                name: "Cash",
                amount: 342000,
                description: "Money at my wallet",
            },
            {
                user: "Seed",
                accountGroup: "Debit Card",
                name: "BCA",
                amount: 31500000,
                description: "This is Bank Central Asia debit card account",
            },
            {
                user: "Seed",
                accountGroup: "Debit Card",
                name: "Mandiri",
                amount: 4734000,
                description: "This is Bank Mandiri debit card account",
            },
            {
                user: "Seed",
                accountGroup: "Debit Card",
                name: "CIMB",
                amount: 4734000,
                description: "This is Bank CIMB debit card account",
            },
            {
                user: "Seed",
                accountGroup: "E Wallet",
                name: "OVO",
                amount: 73000,
                description: "This is OVO account",
            },
            {
                user: "Seed",
                accountGroup: "E Wallet",
                name: "DANA",
                amount: 5700,
                description: "This is DANA account",
            }
        ];
        this.expenseCategory = [
            {
                user: "Seed",
                name: "Food",
                minAmount: 5000,
                maxAmount: 100000,
            },
            {
                user: "Seed",
                name: "Transportation",
                minAmount: 50000,
                maxAmount: 300000,
            },
            {
                user: "Seed",
                name: "Utilities",
                minAmount: 50000,
                maxAmount: 200000,
            },
            {
                user: "Seed",
                name: "Housing",
                minAmount: 5700000,
                maxAmount: 5700000,
            },
            {
                user: "Seed",
                name: "Insurance",
                minAmount: 500000,
                maxAmount: 500000,
            }
        ];
        this.expenseSubcategory = [
            {
                user: "Seed",
                expenseCategory: "Transportation",
                name: "Gas"
            },
            {
                user: "Seed",
                expenseCategory: "Transportation",
                name: "Toll"
            },
            {
                user: "Seed",
                expenseCategory: "Utilities",
                name: "Electricity"
            },
            {
                user: "Seed",
                expenseCategory: "Utilities",
                name: "Data"
            }
        ];
        this.incomeCategory = [
            {
                user: "Seed",
                name: "Paycheck"
            },
            {
                user: "Seed",
                name: "Investment",
            }
        ];

        // seed config
        this.transactionRecords = 200;
        this.date = [];

        this.accountConfig = [
            {
                _id: "",
                user: "Seed",
                accountGroup: "Debit Card",
                name: "Cash",
                usedFor: ["Food", "Transportation"]
            },
            {
                _id: "",
                user: "Seed",
                accountGroup: "Debit Card",
                name: "BCA",
                usedFor: ["Food", "Transportation", "Utilities"]
            },
            // {
            //     _id: "",
            //     user: "Seed",
            //     accountGroup: "Debit Card",
            //     name: "Mandiri",
            //     usedFor: []
            // },
            // {
            //     _id: "",
            //     user: "Seed",
            //     accountGroup: "Debit Card",
            //     name: "CIMB",
            //     usedFor: ["Housing"]
            // },
            {
                _id: "",
                user: "Seed",
                accountGroup: "E Wallet",
                name: "OVO",
                usedFor: ["Food", "Utilities"]
            },
            {
                _id: "",
                user: "Seed",
                accountGroup: "E Wallet",
                name: "DANA",
                usedFor: ["Food", "Utilities"]
            }
        ];

        this.expenseCategoryConfig = [{
            _id: "",
            user: "Seed",
            name: "Food",
            minAmount: 5000,
            maxAmount: 100000,
        },
        {
            _id: "",
            user: "Seed",
            name: "Transportation",
            minAmount: 50000,
            maxAmount: 300000,
        },
        {
            _id: "",
            user: "Seed",
            name: "Utilities",
            minAmount: 50000,
            maxAmount: 200000,
        },
            // {
            //     _id: "",
            //     user: "Seed",
            //     name: "Housing",
            //     minAmount: 2000000,
            //     maxAmount: 2500000,
            // },
            // {
            //     _id: "",
            //     user: "Seed",
            //     name: "Insurance",
            //     minAmount: 500000,
            //     maxAmount: 500000,
            // }
        ]
    }

    seedAccoutGroup() {
        // console.log("seedAccountGroup");
        this.accoutGroup = this.accoutGroup.map((eachAccountGroup) => {
            eachAccountGroup.user = this.userID;
            return eachAccountGroup;
        });
        // console.log(this.accoutGroup);
    }

    seedAccount() {
        // console.log("seedAccount");
        this.account = this.account.map((eachAccount) => {
            eachAccount.user = this.userID;
            const filteredAccountGroup = this.accoutGroup.filter((eachAccountGroup) => {
                return eachAccountGroup.name === eachAccount.accountGroup;
            })
            eachAccount.accountGroup = filteredAccountGroup[0]._id;
            return eachAccount
        })
    }

    setAccountConfig() {
        this.accountConfig = this.accountConfig.map((eachAccountConfig) => {
            const filteredAccount = this.account.filter((eachAccount) => {
                return eachAccount.name === eachAccountConfig.name
            })
            eachAccountConfig._id = filteredAccount[0]._id;
            eachAccountConfig.user = filteredAccount[0].user;
            eachAccountConfig.accountGroup = filteredAccount[0].accountGroup;
            return eachAccountConfig;
        })

        // console.log("accountConfig", this.accountConfig)
    }

    seedExpenseCategory() {
        // console.log("seedExpense")
        this.expenseCategory = this.expenseCategory.map((eachExpenseCategory) => {
            eachExpenseCategory.user = this.userID;
            return eachExpenseCategory;
        });
        // console.log(this.expenseCategory);
    }

    seedExpenseSubcategory() {
        // console.log("seedExpenseSubcategory");
        this.expenseSubcategory = this.expenseSubcategory.map((eachExpenseSubcategory) => {
            eachExpenseSubcategory.user = this.userID;
            const filteredExpenseCategory = this.expenseCategory.filter((eachExpenseCategory) => {
                return eachExpenseCategory.name === eachExpenseSubcategory.expenseCategory;
            })
            eachExpenseSubcategory.expenseCategory = filteredExpenseCategory[0]._id;
            return eachExpenseSubcategory;
        })
        // console.log(this.expenseSubcategory);
    }

    setExpenseCategoryConfig() {
        this.expenseCategoryConfig = this.expenseCategoryConfig.map((eachExpenseCategoryConfig) => {
            const filteredExpenseCategory = this.expenseCategory.filter((eachExpenseCategory) => {
                return eachExpenseCategory.name === eachExpenseCategoryConfig.name
            })
            eachExpenseCategoryConfig._id = filteredExpenseCategory[0]._id;
            eachExpenseCategoryConfig.user = filteredExpenseCategory[0].user;
            return eachExpenseCategoryConfig
        })
        // console.log("expenseCategoryConfig", this.expenseCategoryConfig)
    }

    seedIncomeCategory() {
        // console.log("seedIncome")
        this.incomeCategory = this.incomeCategory.map((eachIncomeCategory) => {
            eachIncomeCategory.user = this.userID;
            return eachIncomeCategory;
        });
        // console.log(this.incomeCategory);
    }

    seedGenerateTransactionDate() {
        const maxDate = new Date();
        const minDate = new Date(new Date().setDate(maxDate.getDate() - 30));

        this.date = faker.date.betweens(minDate.toISOString(), maxDate.toISOString(), this.transactionRecords);
        // console.log(this.date)
    }

    seedTransacion() {
        let transactions = this.date.map((eachDate) => {
            let randomAccount = this.pickRandomArrayElement(this.accountConfig);
            let randomUsedFor = this.pickRandomArrayElement(randomAccount.usedFor);

            let randomExpenseCategoryConfig = this.expenseCategoryConfig.filter((eachExpenseCategory) => {
                return eachExpenseCategory.name === randomUsedFor
            })[0]

            let amount = parseInt(faker.finance.amount(
                randomExpenseCategoryConfig.minAmount,
                randomExpenseCategoryConfig.maxAmount,
                0));

            var eachTransaction = {
                user: this.userID,
                date: eachDate,
                account: randomAccount._id,
                expenseAmount: amount,
                expenseCategory: randomExpenseCategoryConfig._id,
                expenseSubcategory: "",
                incomeAmount: 0,
                incomeCategory: "",
                incomeSubcategory: "",
                transferAmount: 0,
                transferTo: "",
                note: faker.lorem.words(18),
                image: "",
            }
            return eachTransaction
        })

        // generate income
        transactions[0].expenseCategory = ""
        transactions[0].expenseAmount = 0
        transactions[0].account = this.account[1]._id // BCA account
        transactions[0].incomeCategory = this.incomeCategory[0]._id // Paycheck
        transactions[0].incomeAmount = 14565000

        // generate expense: insurance
        transactions[1].expenseCategory = this.expenseCategory[4]._id // Insurance
        transactions[1].expenseAmount = 500000
        transactions[1].account = this.account[1]._id // BCA account
        
        // generate expense: housing
        transactions[1].expenseCategory = this.expenseCategory[3]._id // Insurance
        transactions[1].expenseAmount = 2000000
        transactions[1].account = this.account[3]._id // CIMB account

        this.transactions = transactions
    }

    pickRandomArrayElement(array) {
        // console.log(array)
        const radomElement = array[Math.floor(Math.random() * array.length)];
        return radomElement
    }
}

module.exports = Seeder;
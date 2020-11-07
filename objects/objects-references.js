let myAccount = {
  name: "John",
  expenses: 0,
  income: 0,
};
let otherAccount = myAccount;
otherAccount.income = 1000;

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

// addIncome
let addIncome = function (account, income) {
  account.income = account.income + income;
};

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

// getAccountSummary
// Account for John has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

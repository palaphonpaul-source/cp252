class Expense {
  /**
   Represents an expense.
   @constructor
   @param {string} date - The date of the expense.
   @param {number|string} income - The income amount.
   @param {number|string} expense - The expense amount.
   @param {string} detail - A description of the expense.
  */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  /**
   * Creates an empty expense model.
   * @constructor
   */
  constructor() {
    this.expenses = [];
  }

  /**
   * Adds an expense to the model.
   * @param {Expense} expense - The expense to add.
   * @returns {void}
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * Returns all expenses in the model.
   * @returns {Expense[]} The stored expenses.
   */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculates the total income.
   * @returns {number} The total income.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculates the total expenses.
   * @returns {number} The total expenses.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculates the money remaining after expenses.
   * @returns {number} The remaining money.
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };

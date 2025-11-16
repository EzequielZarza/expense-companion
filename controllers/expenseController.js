import { Expense } from "../models/expenseModel.js";

export const getExpenses = async (req, res) => {
  const expenses = await Expense.find()
  console.log('las expenses',expenses)
  res.send(expenses);
}

export const getExpense = async ({params}, res) => {
  const { id } = params
  const expense = await Expense.findById(id)
  res.send(expense)
}

export const addExpense = async ({body}, res) => {
  console.log('el body', body)
  const { payer, description, amount, currency, splitType } = body;
  const newExpense = await Expense.create({
    payer,
    description,
    amount,
    currency,
    splitType,
    date: Date.now()
  });
  res.send(newExpense)
}

export const updatedExpense = async ({body: updates, params}, res) => {
  const { id } = params
  const updatedExpense = await Expense.findByIdAndUpdate(id, updates, { new: true})
  res.send(updatedExpense)
}

export const deleteExpense = async ({ params }, res) => {
  const { id } = params
  const deletedProduct = await Expense.findByIdAndDelete(id)
  res.send(`Product deleted successfully: ${JSON.stringify(deletedProduct)}`)
}
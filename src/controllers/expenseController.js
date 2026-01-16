import { z } from "zod"
import { Expense } from "../models/expenseModel.js";
import { expenseValidaror, updateexpenseValidaror } from "../validartors/expenseValidator.js";

export const getExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.send(expenses);
}

export const getLatestExpenses = async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 }).limit(3);
  res.send(expenses);
}

export const getExpensesByUser = async ({query: { payer, shortening }}, res) => {
  try {
  const shortPayer = payer?.slice(0, shortening);
  const expenses = await Expense.find(
    { payer: { $regex: shortPayer, $options: 'i' } });
  expenses.length ? res.send(expenses) : res.status(404).json({ message: `No expenses found for user: ${shortPayer}`});
  } catch(error){
    res.status(400).json({ message: `Couldn't find expenses for the user due to: ${error}`});
  }	
}

export const getExpensesHigherThanValue = async ({query: { value }}, res) => {
  try {
  const highestExpenses = await Expense.aggregate([
    { $match: { amount: { $gte: Number(value) } } },
    { $sort: { date: -1 } }
  ]);
  highestExpenses.length ? res.send(highestExpenses) : res.status(404).json({ message: `No expenses greater that ${value} found.`});
  } catch(error){
    res.status(400).json({ message: `Couldn't find expenses greater than ${value} due to: ${error}`});
  }	
}

export const getExpense = async ({params: { id }}, res) => {
  try {
    const expense = await Expense.findById(id)
    res.send(expense)
  } catch(error){
    res.status(400).json({ message: `Couldn't find the requested expense due to: ${error}`});
  }
}

export const addExpense = async ({body}, res) => {
  try {
    const { payer, description, amount, currency, splitType } = body;

    const responseValidator = expenseValidaror.safeParse(body)

    if (!responseValidator.success) {
      return res.status(404).json({
        success: false,
        error: z.treeifyError(responseValidator.error)
      })
    }

    const newExpense = await Expense.create({
      payer,
      description,
      amount,
      currency,
      splitType,
      date: Date.now()
    });
    res.send(newExpense)
  } catch(error){
    res.status(400).json({ message: `Couldn't add expense due to: ${error}`});
  }
}

export const updatedExpense = async ({body: updates, params: { id }}, res) => {
  try{

    const responseValidator = updateexpenseValidaror.safeParse(updates)

    if (!responseValidator.success) {
      return res.status(404).json({
        success: false,
        error: z.treeifyError(responseValidator.error)
      })
    }
    const updatedExpense = await Expense.findByIdAndUpdate(id, updates, { new: true});
    res.send(updatedExpense);
  }catch(error){
    res.status(400).json({ message: `Couldn't update expense due to: ${error}`});
  }
}

export const deleteExpense = async ({params: { id }}, res) => {
  try{
    const deletedProduct = await Expense.findByIdAndDelete(id);
    res.send(`Product deleted successfully: ${JSON.stringify(deletedProduct)}`);
  }catch(error){
    res.status(400).json({ message: `Couldn't delete expense due to: ${error}`});
  }
}
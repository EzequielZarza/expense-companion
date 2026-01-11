import express from "express"
import { getExpenses, addExpense, updatedExpense, deleteExpense, getExpense } from "../controllers/expenseController.js";

const expenseRouter = express.Router();

expenseRouter.get('/', (req, res) => {
  res.send('Expense companion API');
});

expenseRouter.get('/expenses', getExpenses);

expenseRouter.get('/expenses/:id', getExpense);

expenseRouter.post('/expenses',addExpense);

expenseRouter.patch('/expenses/:id', updatedExpense);

expenseRouter.delete('/expenses/:id', deleteExpense);

export default expenseRouter
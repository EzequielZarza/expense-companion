import express from "express"
import { getExpenses, getLatestExpenses, addExpense, updatedExpense, deleteExpense, getExpense } from "../controllers/expenseController.js";

const expenseRouter = express.Router();


expenseRouter.get('/', getExpenses);

expenseRouter.get('/latest', getLatestExpenses);

expenseRouter.get('/:id', getExpense);

expenseRouter.post('/',addExpense);

expenseRouter.patch('/:id', updatedExpense);

expenseRouter.delete('/:id', deleteExpense);

export default expenseRouter
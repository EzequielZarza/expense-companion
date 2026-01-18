import { Router } from "express"
import {
  getExpenses,
  getExpensesByUser,
  getLatestExpenses,
  addExpense,
  updatedExpense,
  deleteExpense,
  getExpense,
  getExpensesHigherThanValue
} from "../controllers/expenseController.ts";

const expenseRouter = Router();

expenseRouter.get('/', getExpenses);

expenseRouter.get('/latest', getLatestExpenses);

expenseRouter.get('/byPayer/', getExpensesByUser);

expenseRouter.get('/highest/', getExpensesHigherThanValue);

expenseRouter.get('/:id', getExpense);

expenseRouter.post('/',addExpense);

expenseRouter.patch('/:id', updatedExpense);

expenseRouter.delete('/:id', deleteExpense);

export default expenseRouter

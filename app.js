import express from "express"
import { connectDb } from "./database/connection.js";
import expenseRouter from "./routers/expenseRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000; 

app.use('/', expenseRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`Expense companion app listening at http://localhost:${PORT}`);
});
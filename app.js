import express from "express"
import dotenv from 'dotenv'
dotenv.config();
import { connectDb } from "./src/database/connection.js";
import expenseRouter from "./src/routers/expenseRouter.js";
import authRouter from "./src/routers/authRouter.js";
import { authMiddleware } from "./src/middlewares/authMiddleware.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080; 

app.use('/api/expenses', authMiddleware, expenseRouter);

app.use("/auth", authRouter)

app.listen(PORT, () => {
  connectDb();
  console.log(`Expense companion app listening at http://localhost:${PORT}`);
});
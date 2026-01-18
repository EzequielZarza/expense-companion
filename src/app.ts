import express, { Express } from "express"
import dotenv from 'dotenv'
dotenv.config();
import { connectDb } from "./database/connection.ts";
import expenseRouter from "./routers/expenseRouter.ts";
import authRouter from "./routers/authRouter.ts";
import { authMiddleware } from "./middlewares/authMiddleware.ts"

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080; 

app.use('/api/expenses', authMiddleware, expenseRouter);

app.use("/auth", authRouter)

app.listen(PORT, () => {
  connectDb();
  console.log(`Expense companion app listening at http://localhost:${PORT}`);
});

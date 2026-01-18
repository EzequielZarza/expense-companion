import mongoose, { Schema, Document } from 'mongoose';

interface IExpense extends Document {
  payer: string;
  description: string;
  amount: number;
  currency: string;
  date?: Date;
  splitType: string;
}

const expenseSchema = new Schema<IExpense>({
  payer: { type: String, required: true, default: 'Ezequiel' },
  description: { type: String, required: true },
  amount: { type: Number, required: true, min: 0},
  currency: { type: String, default: 'ARS'},
  date: { type: Date},
  splitType: { type: String, default: '50/50'}
}, {
  versionKey: false
});

const Expense = mongoose.model<IExpense>('Expense', expenseSchema)
export { Expense }

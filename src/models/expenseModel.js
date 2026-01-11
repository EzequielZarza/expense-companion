import mongoose, { Schema } from 'mongoose';

const expenseSchema = new Schema({
  payer: { type: String, required: true, default: 'Ezequiel' },
  description: { type: String, required: true },
  amount: { type: Number, required: true, min: 0},
  currency: { type: String, default: 'ARS'},
  date: { type: Date},
  splitType: { type: String, default: '50/50'}
}, {
  versionKey: false
});

const Expense = mongoose.model('Expense', expenseSchema)
export { Expense }
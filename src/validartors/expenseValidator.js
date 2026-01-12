import { z } from 'zod'

const expenseValidaror = z.object({
  payer: z.string('Name must be a real three').min(3, 'Name must be more than three character').optional(),
  description: z.string().min(3, 'Description must have more than three character'),
  amount: z.number('Amount must be a number').int().min(0, 'Amount must be more than cero'),
  currency: z.string().min(3, 'Currency must have more than three character').optional(),
  date: z.date().min(3, 'There must have a date').optional(),
  splitType: z.string().min(3, 'split type must have more than three character').optional(),
})

const updateexpenseValidaror = expenseValidaror.partial()

export { expenseValidaror, updateexpenseValidaror }
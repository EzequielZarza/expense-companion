import { z } from "zod"

const expenseValidaror = z.object({
  payer: z.string("El nombre debe ser textual").min(3, "El nombre debe tener más de un caracter").optional(),
  description: z.string().min(3, "la descripcion debe tener más de un caracter"),
  amount: z.number("La cantidad debe ser un número").int().min(0, "La cantidad debe ser un numero positivo mayor a 0"),
  currency: z.string().min(3, "El tipo de cambio debe tener más de un caracter").optional(),
  date: z.date().min(3, "Debe tener fecha").optional(),
  splitType: z.string().min(3, "La division de gasto tiene que tener mas de un caracter").optional(),
})

const updateexpenseValidaror = expenseValidaror.partial()

export { expenseValidaror, updateexpenseValidaror }
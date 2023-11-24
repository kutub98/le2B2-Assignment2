import z from 'zod'

const fullZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
})

const UserHobbiesZodSchema = z.enum([
  'Traveling',
  'Adda',
  'Reading Book',
  'Playing Cricket',
])

const addressZodValidation = z.object({
  city: z.string(),
  street: z.string(),
  country: z.string(),
})

const ordersZodValidation = z.array(
  z.object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number(),
  }),
)

export const userZodSchemaValidation = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string().min(8).max(20).default('user-1235'),
  fullName: fullZodSchema.required(),
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean().default(true),
  hobbies: UserHobbiesZodSchema,
  address: addressZodValidation,
  orders: ordersZodValidation,
})

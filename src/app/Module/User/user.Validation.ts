import z from 'zod'

const fullZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
})

// const UserHobbiesZodSchema = z.array()

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
  hobbies: z.string().array(),
  address: addressZodValidation,
  orders: ordersZodValidation,
})

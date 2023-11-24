import { Schema, model } from 'mongoose'
import { IUser } from './user.interface'
import { UserAddress } from './user.interface'

const UserAddressSchema = new Schema<UserAddress>({
  city: {
    type: String,
    required: [true, 'Provide City name'],
  },
  street: {
    type: String,
    required: [true, 'Provide Street name/no'],
  },
  country: {
    type: String,
    required: [true, 'Provide Country Name'],
  },
})

const userOrderSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'provide product price'],
  },
  quantity: {
    type: Number,
    required: [true, 'provide quantity'],
  },
})

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'User name required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password required'],
    default: 'user-1235',
  },
  age: {
    type: Number,
    required: [true, 'Please provide age number'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  isActive: {
    type: Boolean,
    required: [true, 'Provide activity'],
  },
  hobbies: {
    type: String,
    enum: ['Traveling', 'Adda', 'Reading Book', 'Playing Cricket'],
  },
  address: UserAddressSchema,
  orders: [userOrderSchema],
})

export const UserModel = model<IUser>('users', userSchema)

export type UserHobbies =
  | 'Traveling'
  | 'Adda'
  | 'Reading Book'
  | 'Playing Cricket'

export type UserAddress = {
  street: string
  city: string
  country: string
}

export type userOrders = {
  productName: string
  price: number
  quantity: number
}

export interface IUser {
  userId: number
  username: string
  password: string
  fullName: {
    firstName: string
    lastName: string
  }
  age: number
  email: string
  isActive: boolean
  hobbies: UserHobbies
  address: UserAddress
  orders: [userOrders]
}

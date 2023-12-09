/* eslint-disable @typescript-eslint/no-explicit-any */
import { userZodSchemaValidation } from './user.Validation'
import { IUser, userOrders } from './user.interface'
import { UserModel } from './user.model'

const createUser = async (user: IUser) => {
  const zodParserData = userZodSchemaValidation.parse(user)
  const result = await UserModel.create(zodParserData)
  return result
}

const getAllUsers = async () => {
  const result = await UserModel.find()
  return result
}

const getSingleUser = async (id: string) => {
  const result = await UserModel.findOne({ userId: id })
  return result
}

const UpdatedUserUserID = async (id: string, updateFields: Partial<IUser>) => {
  // const zodParserData = userZodSchemaValidation.parse(updateFields)
  // console.log(id, 'from user services')

  const result = await UserModel.findOneAndUpdate(
    { userId: id },
    updateFields,
    { new: true, runValidators: true },
  )
  console.log(
    id,
    updateFields,
    result,
    'from user services',
    'from user service',
  )
  return result
}

const deleteUser = async (id: any) => {
  const result = await UserModel.deleteOne({ userId: id })
  console.log(id, result.deletedCount, 'from server user id')
  return result
}

const addedAOrder = async (
  id: string,
  payload: { productName: 'string'; price: number; quantity: number },
) => {
  const orders = {
    productName: payload.productName,
    price: payload.price,
    quantity: payload.quantity,
  }

  const result = await UserModel.findOneAndUpdate(
    { userId: id },
    {
      $push: {
        orders: { $each: orders },
      },
    },
    { new: true, runValidators: true },
  )
  return result
}

const getAllOrdesFromSpecificUser = async (id: string) => {
  const user = await UserModel.findOne({ userId: id })
  const orders = user?.orders || ['no orders found']
  return orders
}
const getAllTotlaPriceFromSpecificUser = async (id: string) => {
  const user = await UserModel.findOne({ userId: id })
  const orders: userOrders[] = user?.orders ?? []

  const totalPrice = orders.reduce(
    (acc, order) => acc + order?.price * order?.quantity,
    0,
  )
  return totalPrice
}

// const getUserBySearch = async (searchTerm: string | number | undefined) => {
//   const query = {
//     $or: [
//       { userId: searchTerm },
//       { username: searchTerm },
//       { email: searchTerm },
//     ],
//   }
//   const result = await UserModel.findOne(query)
//   return result
// }

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  UpdatedUserUserID,
  deleteUser,
  addedAOrder,
  getAllOrdesFromSpecificUser,
  getAllTotlaPriceFromSpecificUser,
  // getUserBySearch,
}

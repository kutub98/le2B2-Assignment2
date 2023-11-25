import { userZodSchemaValidation } from './user.Validation'
import { IUser } from './user.interface'
import { UserModel } from './user.model'

const createUser = async (user: IUser) => {
  const zodParserData = userZodSchemaValidation.parse(user)
  // console.log(zodParserData, 'from  user service')
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
  const zodParserData = userZodSchemaValidation.parse(updateFields)
  // console.log('zodParserData', zodParserData)

  const result = await UserModel.findOneAndUpdate(
    { id: id },
    { $set: zodParserData },
    { new: true },
  )
  return result
}

const deleteUser = async (id: string) => {
  const result = await UserModel.findOne({ userId: id })
  return result
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
  // getUserBySearch,
}

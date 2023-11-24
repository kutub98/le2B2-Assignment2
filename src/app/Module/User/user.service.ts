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

export const userServices = {
  createUser,
  getAllUsers,
}

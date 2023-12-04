/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from './user.service'

const storeUserInDB = async (req: Request, res: Response) => {
  try {
    const { userData } = req.body

    const result = await userServices.createUser(userData)
    // console.log(result, 'Result from controller')
    res.status(200).json({
      success: true,
      message: 'Successfully created user',
      data: result,
    })
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    })
  }
}

const getAllUsersFromDb = async (req: Request, res: Response) => {
  try {
    const allUsers = await userServices.getAllUsers()
    res.status(200).json({
      success: true,
      message: 'Successfully retrived all users',
      totalUser: allUsers.length,
      allUser: allUsers,
    })
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: 'somethign went wrong',
      error: err,
    })
  }
}

const getSingleUserFromDb = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const singleUser = await userServices.getSingleUser(userId)
    res.status(200).json({
      success: true,
      // userName: singleUser?.fullName?.firstName,
      message: 'single user retrived successfully',
      user: singleUser,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Something went Wrong',
      error: err,
    })
  }
}

const updateUserByUserIdfromDb = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const { updateFields } = req.body
    const result = await userServices.UpdatedUserUserID(userId, updateFields)

    res.status(200).json({
      success: true,
      message: 'Successfully user data updated',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'sorry not found',
      error: error,
    })
  }
}

const deleteUserFromDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const deletUser = await userServices.deleteUser(userId)

    res.status(200).json({
      success: true,
      message: 'successfully deleted user ',
      data: deletUser,
    })
  } catch (err) {
    res.status(400).json({
      success: true,
      message: 'Sorry not found user',
      error: err,
    })
  }
}

const addedAOrderToUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const { productName, price, quantity } = req.body
    const result = await userServices.addedAOrder(userId, {
      price,
      productName,
      quantity,
    })
    res.status(200).json({
      success: true,
      message: 'Successfully added new order from controller',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error: err,
    })
  }
}

const getAllOrdesFromSpecificUserFromDb = async (
  req: Request,
  res: Response,
) => {
  const { userId } = req.params
  const result = await userServices.getAllOrdesFromSpecificUser(userId)
  res.status(200).json({
    success: true,
    message: `Total Orders ${result.length}`,
    order: result,
  })
}
const getAllTotlaPriceFromSpecificUser = async (
  req: Request,
  res: Response,
) => {
  const { userId } = req.params
  const result = await userServices.getAllTotlaPriceFromSpecificUser(userId)
  res.status(200).json({
    success: true,
    message: `Total prices price calculated successfully` || 'No orderd',
    totalPrice: result || 'no order',
  })
}

// const getUserfromDBBySearch = async (req: Request, res: Response) => {
//   try {
//     const searchTerm = req.query.searchTerm as string | number | undefined
//     const findUserBySearch = await userServices.getUserBySearch(searchTerm)
//     res.status(200).json({
//       success: true,
//       message: 'successfully retrived user by search',
//       data: findUserBySearch,
//     })
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       message: 'Sorry not found',
//       error: err,
//     })
//   }
// }

export const userController = {
  storeUserInDB,
  getAllUsersFromDb,
  getSingleUserFromDb,
  updateUserByUserIdfromDb,
  deleteUserFromDB,
  getAllOrdesFromSpecificUserFromDb,
  addedAOrderToUser,
  getAllTotlaPriceFromSpecificUser,
  // getUserfromDBBySearch,
}

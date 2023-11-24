/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from './user.service'

const storeUserInDB = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    // console.log(userData, 'from controller userdata of req.body')
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

export const userController = {
  storeUserInDB,
  getAllUsersFromDb,
}

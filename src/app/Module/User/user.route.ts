import express from 'express'
import { userController } from './user.controller'

const router = express.Router()

// router.get('/search/search', userController.getUserfromDBBySearch)
router.post('/users', userController.storeUserInDB)
router.get('/users/:userId', userController.getSingleUserFromDb)
router.patch('/users/:userId', userController.updateUserByUserIdfromDb)
router.delete('/users/:userId', userController.deleteUserFromDB)
router.get('/users', userController.getAllUsersFromDb)
export const userRouters = router

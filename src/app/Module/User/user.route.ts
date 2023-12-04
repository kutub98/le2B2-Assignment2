import express from 'express'
import { userController } from './user.controller'

const router = express.Router()

// router.get('/search/search', userController.getUserfromDBBySearch)

router.post('/users', userController.storeUserInDB)
router.get('/users/:userId', userController.getSingleUserFromDb)
router.get(
  '/users/:userId/orders',
  userController.getAllOrdesFromSpecificUserFromDb,
)
router.get(
  '/users/:userId/orders/total-price',
  userController.getAllTotlaPriceFromSpecificUser,
)
router.patch('/users/:userId', userController.updateUserByUserIdfromDb)
router.put('/users/:userId/orders', userController.addedAOrderToUser)
router.get('/users', userController.getAllUsersFromDb)
router.delete('/users/:userId', userController.deleteUserFromDB)

export const userRouters = router

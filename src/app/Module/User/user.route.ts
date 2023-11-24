import express from 'express'
import { userController } from './user.controller'

const router = express.Router()

router.post('/users', userController.storeUserInDB)
router.get('/users', userController.getAllUsersFromDb)

export const userRouters = router

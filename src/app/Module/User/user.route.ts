import express from 'express'
import { userController } from './user.controller'

const router = express.Router()

router.post('/users', userController.storeUserInDB)

export const userRouters = router

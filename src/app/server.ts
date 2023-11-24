import mongoose from 'mongoose'
import Config from '../Config'
import app from './app'

const Le2B2Assignment2 = async () => {
  try {
    await mongoose.connect(Config.DB_URL as string)
    console.log('MongoDb Connect Successfully')

    app.listen(Config.Port, () => {
      console.log(`Application runnig from port no:`, Config.Port)
    })
  } catch (err) {
    console.log(err)
  }
}

Le2B2Assignment2()

import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  try {
    const hello: string = 'Hey I am run from Hello World!'
    res.status(200).json({
      success: true,
      message: 'Application runing successfully',
      data: hello,
    })
  } catch (err) {
    console.log(err)
  }
})

export default app

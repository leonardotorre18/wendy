import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const { DATABASE_URL } = process.env

mongoose.connect(DATABASE_URL ?? '')
  .then(() => {
    console.log('Database connection successful')
  })
  .catch((err: any) => {
    console.log('Database connection Error')
    console.log(err)
  })

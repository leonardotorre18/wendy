import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const { DATABASE_URL } = process.env

console.log(DATABASE_URL)
console.log(process.env.MONGO_INITDB_ROOT_USERNAME)
console.log(process.env.MONGO_INITDB_ROOT_PASSWORD)

mongoose.connect(DATABASE_URL ?? '')
  .then(() => {
    console.log('Database connection successful')
  })
  .catch((err) => {
    console.log('Database connection Error')
    console.log(err)
  })

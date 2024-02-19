import express, {
  type Express
} from 'express'
import router from '../routes'

const server: Express = express()

server.use('/', router)

export default server
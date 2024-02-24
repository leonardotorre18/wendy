import dotenv from 'dotenv'

dotenv.config()
const PORT: number | string = process.env.PORT ?? 3000

export default {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Wendy',
      version: '1.0.0'
      // description: 'Creada con fines didácticos para estudiantes del Instituto  Alfa Carabobo'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ],
    tags: [],
    components: {
      schemas: {}
      // securitySchemes: {
      //   BearerAuth: {
      //     type: 'http',
      //     scheme: 'bearer',
      //     bearerFormat: 'JWT'
      //   }
      // }
    },
    paths: {}
  },
  apis: ['./src/routes/*.ts']
}

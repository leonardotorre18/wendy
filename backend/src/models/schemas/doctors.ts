import {
  type Model,
  Schema,
  model,
  models
} from 'mongoose'
import { type IDoctor } from '../interfaces/IDoctor'

export const doctorsSchema = (): Model<IDoctor> =>

  models.doctors ??

    model<IDoctor>('doctors', new Schema<IDoctor>({
      email: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      },
      name: {
        type: 'string',
        required: true
      },
      specialties: [
        {
          nameSpecialties: {
            type: 'string',
            required: true
          },
          experience: {
            type: 'number',
            required: true
          },
          description: {
            type: 'string',
            required: true
          }
        }
      ],
      availability: [
        {
          day: {
            type: 'string'
          },
          startTime: {
            type: 'date'
          },
          endTime: {
            type: 'date'
          }
        }
      ]
    }))

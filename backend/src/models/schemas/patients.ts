import {
  type Model,
  Schema,
  model,
  models
} from 'mongoose'
import { type IPatient } from '../interfaces/IPatient'

export const patientsSchema = (): Model<IPatient> =>

  models.patients ??

    model<IPatient>('patients', new Schema<IPatient>({
      email: {
        type: 'string',
        required: true,
        unique: true
      },
      password: {
        type: 'string',
        required: true
      },
      name: {
        type: 'string',
        required: true
      },
      age: {
        type: 'number',
        required: true
      }
    }))

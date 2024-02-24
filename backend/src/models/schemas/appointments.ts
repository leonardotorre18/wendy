import {
  type Model,
  Schema,
  model,
  models
} from 'mongoose'
import { type IAppointment } from '../interfaces/IAppointment'

export const AppointmentsSchema = (): Model<IAppointment> =>

  models.appointments ??

    model<IAppointment>('appointments', new Schema<IAppointment>({
      doctor: {
        type: 'string',
        required: true,
        ref: 'doctors'
      },
      patient: {
        type: 'string',
        required: true,
        ref: 'patients'
      },
      content: {
        type: 'string',
        default: ''
      }
    }))

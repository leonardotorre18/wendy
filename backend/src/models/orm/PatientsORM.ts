import { type IPatient } from '../interfaces/IPatient'
import { patientsSchema } from '../schemas/patients'

export const createPatient = async (patient: IPatient): Promise<IPatient> => {
  const model = patientsSchema()
  return await model.create(patient)
}

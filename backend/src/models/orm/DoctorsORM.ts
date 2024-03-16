import { type IDoctor } from '../interfaces/IDoctor'
import { doctorsSchema } from '../schemas/doctors'

export const createDoctor = async (doctor: IDoctor): Promise<IDoctor> => {
  const model = doctorsSchema()
  return await model.create(doctor)
}

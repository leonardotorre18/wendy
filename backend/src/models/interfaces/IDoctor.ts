interface DoctorSpecialties {
  nameSpecialties: string
  experience: number
  description: string
}

interface DoctorAvailability {
  day: string
  startTime: Date
  endTime: Date

}
export interface IDoctor {
  email: string
  password: string
  name: string
  specialties: DoctorSpecialties[]
  availability: DoctorAvailability[]
}
export const createMockFacilityStaffDTO = () => {
  const index = Math.floor(Math.random() * 10000)

  return {
    id: index.toString(),
    name: 'staff',
    image: null,
  }
}

type Props = {
  lastName: string
  firstName: string
  lastNameKana: string
  firstNameKana: string
}

export const createMockFacilityUserDTO = (
  { lastName, firstName, lastNameKana, firstNameKana }: Props = {
    lastName: '田中',
    firstName: '太郎',
    lastNameKana: 'タナカ',
    firstNameKana: 'タロウ',
  },
) => {
  const index = Math.floor(Math.random() * 10000)

  return {
    id: index,
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    gender: 'male',
    genderId: 1,
    // eslint-disable-next-line
    birthDate: new Date(),
    image: null,
    dischargeDate: null,
    pastMedicalHistories: [],
    externalSystemManagementNumber: '1',
    lifeOriginLastName: null,
    lifeOriginFirstName: null,
    lifeOriginLastNameKana: null,
    lifeOriginFirstNameKana: null,
  }
}

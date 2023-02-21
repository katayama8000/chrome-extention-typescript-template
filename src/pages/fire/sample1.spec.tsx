/* eslint-disable no-promise-executor-return */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/no-extraneous-dependencies

import { createMockFacilityDTO, createMockFacilityStaffDTO } from '../../lib/testHelper'

interface FacilityDTO {
  id: string
  name: string
}

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/fire/sample1',
    query: {},
  }),
}))

const defaultFacility = createMockFacilityDTO()

const defaultFacilityStaffs = [...Array<number>(5)].map(() => createMockFacilityStaffDTO())
console.log(defaultFacilityStaffs)
console.log(defaultFacility)

describe('Sample1', () => {
  it('should be 5 length', () => {
    expect(defaultFacilityStaffs.length).toBe(5)
  })
})

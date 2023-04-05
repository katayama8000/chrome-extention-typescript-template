import React, { useEffect, useState } from 'react'

import { Button, Flex, Switch, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr } from '@chakra-ui/react'
import { collection, getDocs, query } from 'firebase/firestore'

import { db } from '@/lib/firebase'

type TStaff = {
  name: string
  job?: {
    id: number
    name: string
  }
}
function Sample1() {
  const [staffs, setStaffs] = useState<TStaff[]>([])
  const f = async () => {
    const q = query(collection(db, 'facilities', 'test', 'staff'))
    console.log(q)
    const querySnapshot = await getDocs(q)
    console.log(querySnapshot)
    const staff = querySnapshot.docs.map((doc) => doc.data())
    console.log(staff)
    setStaffs(staff as TStaff[])
  }
  useEffect(() => {
    f()
  }, [])

  return (
    <div>
      <h1>firebase</h1>
      <Button onClick={() => ({})} colorScheme='primary' />
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th fontSize={16} p={4}>
                name
              </Th>
              <Th fontSize={16} p={4}>
                job
              </Th>
              <Th fontSize={16} p={4}>
                status
              </Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {staffs.map((staff, i) => (
              <Tr key={staff.name} data-testid='facilityStaff'>
                <Td>
                  <Flex>
                    <Tooltip label={staff.name}>
                      <Text maxW='100px' fontSize='xl' fontWeight='bold' textOverflow='ellipsis' overflow='hidden'>
                        {staff.name}
                      </Text>
                    </Tooltip>
                  </Flex>
                </Td>
                <Td>
                  <Text maxW='100px' fontSize='xl' fontWeight='bold' textOverflow='ellipsis' overflow='hidden'>
                    {staff.job?.name}
                  </Text>
                </Td>
                <Td>
                  <Switch size='lg' />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Sample1

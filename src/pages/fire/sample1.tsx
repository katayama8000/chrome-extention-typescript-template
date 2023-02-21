import React from 'react'

import { Button } from '@chakra-ui/react'
import { doc, DocumentReference, getDoc } from 'firebase/firestore'

import { db } from '@/lib/firebase'

const Sample1 = () => {
  const get = async () => {
    console.log('getDoc')
    const familyRef: DocumentReference = doc(db, 'family', 'WbtHwgpNRA4j2fbfgpUO')
    console.log(familyRef)
    const familyDoc = await getDoc(familyRef)
    console.log(familyDoc.data())
  }
  return (
    <div>
      <h1>firebase</h1>
      <Button onClick={() => get()}>get</Button>
    </div>
  )
}

export default Sample1

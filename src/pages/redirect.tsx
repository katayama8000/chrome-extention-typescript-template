import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function Redirect() {
  const { replace } = useRouter()
  const f = async () => {
    replace('/fire/sample1')
  }
  useEffect(() => {
    f()
  }, [])

  return (
    <div>
      <h1>redirecting...</h1>
    </div>
  )
}

export default Redirect

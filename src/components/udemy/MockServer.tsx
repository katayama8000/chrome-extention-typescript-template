/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import axios from 'axios'

export const MockServer = () => {
  const [clickedme, setClickedme] = React.useState<boolean>(false)
  const [username, setUsername] = React.useState<string>('')
  const [error, setError] = React.useState<string>('')

  const fetchUser = async () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        setUsername(res.data.username)
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  const buttonText = clickedme ? 'Loaded' : 'Start Fetch'
  return (
    <div>
      <button
        type='button'
        disabled={clickedme}
        onClick={() => {
          setClickedme(true)
          fetchUser()
        }}
      >
        {buttonText}
      </button>
      {username && <h1>{username}</h1>}
      {error && <p data-testid='error'>{error}</p>}
    </div>
  )
}

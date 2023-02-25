/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react'

type Props = {
  frameworks?: {
    id: number
    item: string
  }[]
}
export const FrameworkList: FC<Props> = (props) => {
  if (!props.frameworks || props.frameworks.length === 0) {
    return <h1>No Data!</h1>
  }
  return (
    <div>
      <ul>
        {props.frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

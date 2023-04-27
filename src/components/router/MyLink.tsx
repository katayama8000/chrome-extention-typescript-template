/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { FC } from 'react'
import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
}
export const MyLink: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}

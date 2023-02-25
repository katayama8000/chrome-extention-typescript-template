/* eslint-disable react/react-in-jsx-scope */
import { cleanup, render, screen } from '@testing-library/react'

import { FrameworkList } from './frameworkList'

afterEach(() => cleanup())

describe('not render', () => {
  test('if no frameworks', () => {
    render(<FrameworkList />)
    expect(screen.getByText('No Data!')).toBeInTheDocument()
  })
})

describe('render', () => {
  test('if frameworks', () => {
    const frameworks = [
      { id: 1, item: 'React' },
      { id: 2, item: 'Angular' },
    ]
    render(<FrameworkList frameworks={frameworks} />)
    const frameworkList = screen.getAllByRole('listitem').map((li) => li.textContent)
    const dummyList = frameworks.map((framework) => framework.item)
    expect(frameworkList).toEqual(dummyList)
    expect(screen.queryByText('No Data!')).toBeNull()
  })
})

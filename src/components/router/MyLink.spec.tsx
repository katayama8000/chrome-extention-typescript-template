/* eslint-disable global-require */
/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from '@testing-library/react'

import { MyLink } from './MyLink'

// テスト落ちている
describe('MyLink', () => {
  it('should render correctly', () => {
    render(<MyLink href='/about'>About</MyLink>)
    const linkElement = screen.getByText('About')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.tagName).toBe('A')
    expect(linkElement.getAttribute('href')).toBe('/about')
  })

  it('should navigate to the correct page on click', () => {
    const pushMock = jest.fn()
    const useRouterMock = jest.spyOn(require('next/router'), 'useRouter')
    useRouterMock.mockReturnValue({
      push: pushMock,
    })

    render(<MyLink href='/about'>About</MyLink>)

    const linkElement = screen.getByText('About')
    fireEvent.click(linkElement)

    expect(pushMock).toHaveBeenCalledWith('/about')
  })
})

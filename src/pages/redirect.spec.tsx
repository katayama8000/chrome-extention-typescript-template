/* eslint-disable react/react-in-jsx-scope */
import { render, waitFor } from '@testing-library/react'

import Redirect from './redirect'

const mockRouterReplace = jest.fn()
jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
    replace: mockRouterReplace,
  }),
}))

describe('Redirect', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render successfully', () => {
    const { baseElement } = render(<Redirect />)
    expect(baseElement).toBeTruthy()
  })

  test('shuold render successfully', () => {
    const { baseElement } = render(<Redirect />)
    expect(baseElement).toBeTruthy()
  })

  test('ページを表示すると/に遷移すること', async () => {
    const { baseElement } = render(<Redirect />)
    expect(baseElement).toBeTruthy()
    await waitFor(() => {
      expect(mockRouterReplace).toBeCalledWith('/')
    })
  })
})

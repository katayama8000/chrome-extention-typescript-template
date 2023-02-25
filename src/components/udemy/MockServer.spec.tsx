/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import { cleanup, render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { MockServer } from './MockServer'

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ username: 'Bred Dummy' })),
  ),
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  cleanup()
})

afterAll(() => server.close())

describe('fetch', () => {
  it('should fetch data', async () => {
    render(<MockServer />)
    const button = screen.getByRole('button')
    UserEvent.click(button)
    expect(await screen.findByRole('heading')).toHaveTextContent('Bred Dummy')
    expect(screen.queryByRole('button')).toHaveAttribute('disabled')
  })

  it('should show error', async () => {
    server.use(rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => res(ctx.status(404))))
    render(<MockServer />)
    const button = screen.getByRole('button')
    UserEvent.click(button)
    expect(await screen.findByTestId('error')).toHaveTextContent('Request failed with status code 404')
    expect(screen.queryByRole('heading')).toBeNull()
    expect(screen.queryByRole('button')).toHaveAttribute('disabled')
  })
})

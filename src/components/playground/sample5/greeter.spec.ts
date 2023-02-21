import { greet } from './greeter'

describe('#greeter', () => {
  describe('#greet', () => {
    const noonTime = new Date('2020-10-10T15:00:00')
    const morningTime = new Date('2020-10-10T08:00:00')

    beforeEach(() => {
      //   const mock = jest.fn(() => morningTime)
      //   console.log(mock)
    })

    describe('mock date function', () => {
      it('Hello <name> when the time is 12:00 - 05:59', () => {
        expect(greet('hoge')).toEqual('Hello!! Hoge')
      })

      it('Good morning <name> when the time is 06:00-11:59', () => {
        expect(greet('foo')).toEqual('Hello!! Foo')
      })
    })
  })
})

import { video } from './video'

test('plays videos false jest.fn()', () => {
  ;(video.play as jest.Mock) = jest.fn().mockReturnValue(false)
  const isPlaying = video.play()

  expect(video.play).toHaveBeenCalled()
  expect(isPlaying).toBe(false)
})

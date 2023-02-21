import { video } from './video'

test('plays video false', () => {
  const spy = jest.spyOn(video, 'play').mockImplementation(() => false)
  const isPlaying = video.play()

  expect(spy).toHaveBeenCalled()
  expect(isPlaying).toBe(false)

  spy.mockRestore()
})

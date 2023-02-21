import { video } from './video'

test('plays video', () => {
  const spy = jest.spyOn(video, 'play', 'get') // we pass 'get'
  const isPlaying = video.play

  expect(spy).toHaveBeenCalled()
  expect(isPlaying).toBe(true)

  spy.mockRestore()
})

test('plays audio', () => {
  // const spy = jest.spyOn(audio, 'volume', 'set') // we pass 'set'
  // audio.volume = 100
  //   expect(spy).toHaveBeenCalled()
  //   expect(audio.volume).toBe(100)
  // spy.mockRestore()
})

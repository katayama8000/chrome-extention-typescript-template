export const video = {
  // it's a getter!
  get play() {
    return true
  },
}

export const audio = {
  volume: 0,
  // it's a setter!
  set setVolume(value: number) {
    this.volume = value
  },
  get getVolume(): number {
    return this.volume
  },
}

export const video = {
  // it's a getter!
  get play() {
    return true
  },
}

export const audio = {
  volumeVal: 100,
  // it's a setter!
  set volume(value: number) {
    this.volumeVal = value
  },
  get volume(): number {
    return this.volumeVal
  },
}

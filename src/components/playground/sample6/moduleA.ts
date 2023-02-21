/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
export class CalcModuleA {
  constructor(readonly x: number) {}

  exec(a: number, b: number) {
    return a + b - this.x
  }
}
export class TextModuleA {
  exec(a: string, b: string) {
    return a + b
  }
}

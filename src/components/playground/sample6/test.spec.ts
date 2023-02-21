import { TextModuleA } from './moduleA'
import { TestClass } from './test'

describe('spyOn', () => {
  it('TextModuleA.exec mock', () => {
    // TestClassクラスに渡すTextModuleAクラスのインスタンスを作成
    const t = new TextModuleA()
    // execメソッドのmock化
    const mockTextExec = jest.spyOn(t, 'exec')
    // mock処理を仕込む
    mockTextExec.mockImplementation((a: string, b: string) => 'spy')

    const test = new TestClass(t)
    // testインスタンス内のCalcModuleAクラスのexecメソッドをmock化
    // インスタンスが取得さえ出来れば、mock化することができる。
    const mockCalcExec = jest.spyOn(test.calc, 'exec')

    // テスト対象のメソッドを実行
    const result = test.getText('testA', 'planB')
    console.log(`spyOn result: ${result}`)

    // mock化したメソッドの引数を検証
    expect(mockTextExec).toBeCalledTimes(1)
    expect(mockTextExec).toBeCalledWith('te', 'nB')
    expect(mockCalcExec).toBeCalledTimes(1)
    expect(mockCalcExec).toBeCalledWith(5, 5)
    // テスト対象メソッドの結果を検証
    expect(result).toBe('spytA9')
  })
})

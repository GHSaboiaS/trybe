const math = require('./mathExercises')

describe('Testing operations', () => {
  it('Mocking subtrair', () => {
    expect(math.subtrair(2, 3)).toBe(-1)

    const mockSub = jest
      .spyOn(math, 'subtrair')
      .mockReturnValue(20)

    mockSub(2, 5)
    expect(mockSub).toHaveBeenCalledTimes(1)
    expect(mockSub()).toBe(20)
    expect(mockSub).toHaveBeenCalledTimes(2)

    math.subtrair.mockRestore()
    expect(math.subtrair(1, 4)).toBe(-3)
  })

  it('Mocking multiplicar', () => {
    const mockMult = jest
      .spyOn(math, 'multiplicar')
      .mockReturnValue(10)

    mockMult()
    expect(mockMult).toHaveBeenCalled()
    expect(mockMult).toHaveBeenCalledTimes(1)
    expect(mockMult()).toBe(10)
    expect(mockMult).toHaveBeenCalledTimes(2)
  })

  it('Mocking somar', () => {
    const mockSum = jest
      .spyOn(math, 'somar')
      .mockImplementation((a, b) => a + b)

    mockSum(2, 3)
    expect(mockSum).toHaveBeenCalled()
    expect(mockSum(4, 5)).toBe(9)
    expect(mockSum).toHaveBeenLastCalledWith(4, 5)
    expect(mockSum).toHaveBeenCalledTimes(2)
  })

  it('Mocking dividir', () => {
    const mockDiv = jest
      .spyOn(math, 'dividir')
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5)

    expect(mockDiv()).toBe(2)
    expect(mockDiv).toHaveBeenCalledTimes(1)
    expect(mockDiv()).toBe(5)
    expect(mockDiv).toHaveBeenCalledTimes(2)
    expect(mockDiv()).toBe(15)
    expect(mockDiv).toHaveBeenCalledTimes(3)
  })
})
const exercises = require('./exercises')

describe('Testing generateRandom', () => {
  it('Exercise 1', () => {
    const mockGenRand1 = jest
    .spyOn(exercises, 'generateRandom')
    .mockReturnValue(10)

    expect(mockGenRand1()).toBe(10)
    expect(mockGenRand1).toHaveBeenCalled()
    expect(mockGenRand1).toHaveBeenCalledTimes(1)
  })

  it('Exercise 2', () => {
    const mockGenRand2 = jest
      .spyOn(exercises, 'generateRandom')
      .mockImplementationOnce((a, b) => a / b)
    
    expect(mockGenRand2(4, 2)).toBe(2)
    expect(mockGenRand2).toHaveBeenCalled()
    expect(mockGenRand2).toHaveBeenCalledTimes(2)
  })

  it('Exercise 3', () => {
    const mockGenRand3 = jest
      .spyOn(exercises, 'generateRandom')
      .mockImplementationOnce((a, b, c) => a * b * c)
    
    expect(mockGenRand3(1, 2, 3)).toBe(6)
    expect(mockGenRand3).toHaveBeenCalled()
    expect(mockGenRand3).toHaveBeenCalledTimes(3)

    exercises.generateRandom.mockRestore()
    const mockGenRand21 = jest
      .spyOn(exercises, 'generateRandom')
      .mockImplementationOnce((a) => a * 2)
    
    expect(mockGenRand21(3)).toBe(6)
    expect(mockGenRand21).toHaveBeenCalled()
    expect(mockGenRand21).toHaveBeenCalledTimes(1)
  })

  it('Exercise 4', () => {
    jest.spyOn(exercises, 'first').mockImplementationOnce((string) => string.toLowerCase())
    
    expect(exercises.first('AAA')).toBe('aaa')
    expect(exercises.first).toHaveBeenCalledTimes(1)

    jest.spyOn(exercises, 'second').mockImplementationOnce((string) => string[string.length - 1])

    expect(exercises.second('Guilherme')).toBe('e')
    expect(exercises.second).toHaveBeenCalledTimes(1)

    jest.spyOn(exercises, 'third').mockImplementationOnce((s1, s2, s3) => s1 + s2 + s3)

    expect(exercises.third('eu', 'tu', 'nois')).toBe('eutunois')
    expect(exercises.third).toHaveBeenCalledTimes(1)
  })
})
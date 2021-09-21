const sum = require('./sum.js')

describe('sum must return sum of both parameters', () => {
  test('sum(4, 5) must return 9', () => {
    expect(sum(4, 5)).toBe(9)
  })
  test('sum(0, 0) must return 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  test('sum(4, "5") must throw error', () => {
    expect(() => sum(4, "5")).toThrow(new Error('parameters must be numbers'))
  })
})
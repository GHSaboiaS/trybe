const decode = require('../src/decode.js')

describe('Testing function decode', () => {
  test('Test if encode is a function', () => {
    expect(typeof decode).toBe('function')
  })
  test('Decode turns vowels into numbers', () => {
    expect(decode('1bcd2fg')).toEqual('abcdefg')
  })
  test('Argument and return strings have same length', () => {
    expect(decode('abcde').length).toBe('abcde'.length)
  })
})

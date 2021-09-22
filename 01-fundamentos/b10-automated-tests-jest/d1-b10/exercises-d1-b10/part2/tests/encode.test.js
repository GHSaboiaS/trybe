const encode = require('../src/encode.js')

describe('Testing function encode', () => {
  test('Test if encode is a function', () => {
    expect(typeof encode).toBe('function')
  })
  test('Encode turns vowels into numbers', () => {
    expect(encode('abcde1g')).toEqual('1bcd21g')
  })
  test('Argument and return strings have same length', () => {
    expect(encode('abcde').length).toBe('abcde'.length)
  })
})
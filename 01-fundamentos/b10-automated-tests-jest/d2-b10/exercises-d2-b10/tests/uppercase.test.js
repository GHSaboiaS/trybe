const uppercase = require('../src/uppercase.js')

test('Checking callback return', (done) => {
  uppercase('hello', (word) => {
    try {
      expect(word).toBe('HELLO')
      done()
    } catch (err) {
      done(err)
    }
  })
})
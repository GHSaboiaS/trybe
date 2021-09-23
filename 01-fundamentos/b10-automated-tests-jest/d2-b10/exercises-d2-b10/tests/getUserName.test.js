const getUserName = require('../src/getUserName.js')

describe('Checking getUserName (promise syntax)', () => {
  it('if returns name when user exists', () => {
    expect.assertions(1)
    return getUserName(1).then((userName) => {
      expect(userName).toBe('Mark')
    })
  })

  it('if returns error when user does not exist', () => {
    expect.assertions(1)
    return getUserName(0).catch((err) => {
      expect(err.message).toMatch('User with 0 not found.')
    })
  })
})

describe('Checking getUserName (async/await syntax)', () => {
  it('if returns name when user exists', async () => {
    await expect(getUserName(1)).resolves.toBe('Mark')
  })

  it('if returns error when user does not exist', async () => {
    await expect(getUserName(0)).rejects.toEqual(new Error('User with 0 not found.'))
  })
})


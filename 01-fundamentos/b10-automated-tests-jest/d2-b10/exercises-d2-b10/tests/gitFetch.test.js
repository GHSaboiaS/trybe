const getRepos = require('../src/gitFetch.js')

describe('Checking gitFetch', () => {
  it('if specific projects are in API return', async () => {
    const expected = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator']
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos')
    const isIncluded = expected.every((el) => repos.includes(el))
    expect(isIncluded).toBe(true)
  })
})
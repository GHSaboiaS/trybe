const myRemove = require('./myRemove.js')

describe('myRemove(arr, item) must remove item if in array', () => {
  test('myRemove removes correct item, returns correct array', () => {
    const myArr = [1, 2, 3, 4]
    expect(myRemove(myArr, 3)).toEqual([1, 2, 4])
  })
  test('myRemove does not return unmodified array', () => {
    const myArr = [1, 2, 3, 4]
    expect(myRemove(myArr, 2)).not.toEqual([1, 2, 3, 4])
  })
  test('myRemove works if item not in array', () => {
    const myArr = [1, 2, 3, 4]
    expect(myRemove(myArr, 5)).toEqual([1, 2, 3, 4])
  })

})
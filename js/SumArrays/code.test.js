const sum = require('./code.js')

describe('#sum', () => {
  it('expected to return the sum of the following series up to nth term', () => {
    expect(sum([])).toBe(0)
    expect(sum([1, 5.2, 4, 0, -1])).toBe(9.2)
  })
})

const solution = require('./code.js')

describe('#sum', () => {
  it('expected to return the sum of the following series up to nth term', () => {
    expect(solution('abcde', 'cde')).toBe(true)
    expect(solution('abcde', 'abc')).toBe(false)
  })
})

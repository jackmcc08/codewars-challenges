const reverseWords = require('./code.js')

describe('#reverseWords', () => {
  it('reverses each word in a string', () => {
    expect(reverseWords('apple')).toBe('elppa')
    expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow')
  })
})

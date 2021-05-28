const SeriesSum = require('./code.js')

describe('#SeriesSum', () => {
  it('expected to return the sum of the following series up to nth term', () => {
    expect(SeriesSum(0)).toBe("0.00")
    expect(SeriesSum(1)).toBe("1.00")
    // expect(SeriesSum(2)).toBe("1.25")
    // expect(SeriesSum(3)).toBe("1.39")
    // expect(SeriesSum(4)).toBe("1.49")
  })
})

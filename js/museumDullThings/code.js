function removeSmallest(numbers) {
  if (numbers.length === 0) return [];

  const lowestNum = Math.min(...numbers)
  const index = numbers.indexOf(lowestNum)

  return numbers.slice(0, index).concat(numbers.slice(index + 1))
}


module.exports = removeSmallest

// Math by default accepts a variable list of ARGUMENTS and then will return min or max value
// In order to accept an array, we can use apply

function smallest(array) {
  return Math.min.apply(Math, array)
}

function largest(array) {
  return Math.max.apply(Math, array)
}

assert(smallest([0,1,2,3,4]) == 0, 'Located the smallest value.')
assert(largest([0,1,2,3,4]) == 4, 'Located the largest value.')
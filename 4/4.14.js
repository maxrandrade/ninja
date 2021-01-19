function multiMax(multi) {
  return multi * Math.max.apply(Math, Array.prototype.slice.call(arguments, 1))
  //This solves the problem and its pretty smart
}

assert(multiMax(3,5,6,2,9) === 27, '3*9=27 (First arg, by largest.)')
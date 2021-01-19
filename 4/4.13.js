function multiMax(multi) {
  return multi * Math.max.apply(Math, arguments.slice(1))
  // This doesn't work. Arguments seems like an array but lacks almost all its methods
}

assert(multiMax(3,5,6,2,9) === 27, '3*9=27 (First arg, by largest.)')
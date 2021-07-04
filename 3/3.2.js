tests('|----- BEFORE OUTER -----|', typeof outer, typeof inner, typeof a, typeof b, typeof c)

function outer() {
  tests('|----- INSIDE OUTER, BEFORE a -----|', typeof outer, typeof inner, typeof a, typeof b, typeof c)

  var a = 1

  tests('|----- INSIDE OUTER, AFTER a -----|', typeof outer, typeof inner, typeof a, typeof b, typeof c)

  function inner(){/* does nothing */}
  
  var b = 2

  tests('|----- INSIDE OUTER, AFTER inner() AND b -----|', typeof outer, typeof inner, typeof a, typeof b, typeof c)

  if (a === 1) {
    var c = 3
    tests('|----- INSIDE OUTER, INSIDE if -----|', typeof outer, typeof inner, typeof a, typeof b, typeof c)
  }

  tests('|----- INSIDE OUTER, OUTSIDE if -----|', typeof outer, typeof inner, typeof a, typeof b, typeof c)
}

outer()

tests('|----- AFTER OUTER -----|', typeof outer, typeof inner, typeof a, typeof b, typeof c)

function tests(message, outer, inner, a, b, c) {
  assert(true, message)
  assert(outer === 'function', 'outer() is in scope')
  assert(inner === 'function', 'inner() is in scope')
  assert(a === 'number', 'a is in scope')
  assert(b === 'number', 'b is in scope')
  assert(c === 'number', 'c is in scope')
}

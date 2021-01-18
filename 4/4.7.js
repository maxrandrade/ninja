var ninja = {
  chirp: function(n) {
    return n > 1 ? arguments.callee(n - 1) + '-chirp' : 'chirp'
  }
}

assert(ninja.chirp(3) == 'chirp-chirp-chirp', 'arguments.callee is the function itself')
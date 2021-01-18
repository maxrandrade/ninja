var ninja = {
  chirp: function signal(n) {
    return n > 1 ? signal(n - 1) + '-chirp' : 'chirp'
  }
}

assert(ninja.chirp(3) == 'chirp-chirp-chirp', 'Works as we would expect it to!')

var samurai = {
  chirp: ninja.chirp
}

ninja = {}

try {
  assert(samurai.chirp(3) == 'chirp-chirp-chirp', 'Is this going to work?')
} catch (e) {
  assert(false, 'Uh, this is not good! Where\'d ninja.chirp go?')
}
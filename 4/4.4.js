var ninja = {
  chirp: function(n) {
    // ninja.chirp would ruin samurai.chirp, but 'this' keyword fixes it
    return n > 1 ? this.chirp(n - 1) + '-chirp' : 'chirp'
  }
}

var samurai = {
  chirp: ninja.chirp // the first call is executed, but at the moment of recursion, ninja.chirp is undefined so the keyword 'this' is required
}

ninja = {}

try {
  assert(samurai.chirp(3) == 'chirp-chirp-chirp', 'Is this going to work?')
} catch (e) {
  assert(false, 'Uh, this is not good! Where\'d ninja.chirp go?')
}
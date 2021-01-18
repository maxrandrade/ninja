function assert(value, desc) {
  var li = document.createElement('li')
  li.className = value ? 'pass' : 'fail'
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

var ninja = {
  chirp: function(n) {
    // ninja.chirp would ruin samurai.chirp, but 'this' keyword fixes it
    return n > 1 ? this.chirp(n - 1) + '-chirp' : 'chirp'
  }
}

var samurai = {
  chirp: ninja.chirp
}

ninja = {}

try {
  assert(samurai.chirp(3) == 'chirp-chirp-chirp', 'Is this going to work?')
} catch (e) {
  assert(false, 'Uh, this is not good! Where\'d ninja.chirp go?')
}
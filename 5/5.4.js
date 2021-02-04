function Ninja() {
  var feints = 0 //variável particular

  this.getFeints = function() {
    return feints
  }

  this.feint = function() {
    feints++
  }
}

var ninja = new Ninja()

var ronin = {
  feints: 0, // variavel publica
  getFeints: function() {
    return this.feints
  },
  feint: function() {
    this.feints++
  }
}

ninja.feint()

assert(ninja.getFeints() == 1 , 'We\'re able to access the internal feint count.')
assert(ninja.feints == undefined , 'And the private data is inaccessible to us.')
assert(ronin.feints == 0, 'We can access feints from literal object')


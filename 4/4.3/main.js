function assert(value, desc) {
  var li = document.createElement('li')
  li.className = value ? 'pass' : 'fail'
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

var ninja = {
  chirp: function(n) {
    return n > 1 ? ninja.chirp(n - 1) + '-chirp' : 'chirp'
  }
}

assert(ninja.chirp(3) == 'chirp-chirp-chirp', 'An object property isn\'t too confusing, either.')
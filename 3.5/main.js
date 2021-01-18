function assert(value, desc) {
  var li = document.createElement('li')
  li.className = value ? 'pass' : 'fail'
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

function juggle() {
  var result = 0
  for (var n = 0; n < arguments.length; n++) {
    result += arguments[n]
  }
  this.result = result
}

var ninja1 = {}
var ninja2 = {}

juggle.apply(ninja1, [1,2,3,4,5])
juggle.call(ninja2, 5,2,3,4,5)

assert(ninja1.result === 15, 'juggled via apply')
assert(ninja2.result === 19, 'juggled via call')
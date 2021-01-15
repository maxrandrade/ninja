function assert(value, desc) {
  var li = document.createElement('li')
  li.className = value ? 'pass' : 'fail'
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

function Ninja() {
  this.skulk = function() { return this }
}

var ninja1 = new Ninja()
var ninja2 = new Ninja()

assert(ninja1.skulk() === ninja1, 'The 1st ninja is skulking')
assert(ninja2.skulk() === ninja2, 'The 2st ninja is skulking')
function assert(value, desc) {
  var li = document.createElement('li')
  li.className = value ? 'pass' : 'fail'
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

window.onload = function() { assert(true, 'power!') }

var ninja = {
  shout: function() {
    assert(true, 'Ninja')
  }
}

ninja.shout()

setTimeout(
  function() {
    assert(true, 'Forever!')
  }, 500)

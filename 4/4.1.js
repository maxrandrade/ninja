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

function assert(value, desc) {
  var li = document.createElement('li')
  li.className = value ? 'pass' : 'fail'
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

var text = 'Domo arigato!'

function useless(callback) {
  return callback()
}

window.onload = function() {
  assert(useless(function() {
    return text
  }) === text,
  'The useless function works! ' + text)
}

// Page 70

function isNimble() { return true }

assert(typeof window.isNimble === 'function', 'isNimble() defined')
assert(isNimble.name === 'isNimble', 'isNimble() has a name')

var canFly = function() { return true }
assert(typeof window.canFly === 'function', 'canFly() defined')
assert(canFly.name === '', 'canFly() has no name')
console.log(window)

window.isDeadly = function() { return true }
assert(typeof window.isDeadly === 'function', 'isDeadly() defined')

function outer(){
  assert(typeof inner === 'function', 'inner() in scope before declaration')
  function inner(){}
  assert(typeof inner === 'function', 'inner() in scope after declaration')
  assert(window.inner === undefined, 'inner() not in global scope')
}
outer()

assert(window.inner === undefined, 'inner() still not in global scope')

window.wieldsSword = function swingsSword() { return true }
assert(window.wieldsSword.name === 'swingsSword', "wieldSword's real name is swingsSword")

var ownTest = function () { return true }
assert(window.ownTest.name === '', "ownTest's real name is namedFunction")
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
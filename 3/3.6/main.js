function assert(value, desc) {
  var li = document.createElement('li')
  li.className = value ? 'pass' : 'fail'
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

function forEach(list, callback) {
  for (var n = 0; n < list.length; n++) {
    callback.call(list[n], n)
  }
}

var weapons = ['shuriken','katana','nunchucks']

forEach(weapons, function(index){
  assert(this == weapons[index], "Got the expected value of " + weapons[index])
})

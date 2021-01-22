var ninjas = {
  values: ['Dean Edwards', 'Sam Stephenson', 'Alex Russell']
}

addMethod(ninjas, 'find', function() {
  return this.values
})

addMethod(ninjas, 'find', function(name) {
  var ret = []
  for (var i = 0; i < this.values.length; i++) {
    if (this.values[i].indexOf(name) == 0) {
      ret.push(this.values[i])
    }
  }
  return ret
})

addMethod(ninjas, 'find', function(first, last) {
  var ret  = []
  for (var i = 0; i < this.values.length; i++) {
    if (this.values[i] == (first) + ' ' + last) {
      ret.push(this.values[i])
    }
  }
  return ret
})

assert(ninjas.find().length == 3, 'Found all ninjas')
assert(ninjas.find('Sam').length == 1, 'Found ninja by first name')
assert(ninjas.find('Dean', 'Edwards').length == 1, 'Found ninja by first name')
assert(ninjas.find('Alex', 'Russel', 'Jr') == null, 'Found nothing')

function merge(root) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]){
      root[key] = arguments[i][key]
    }
  }
  return root
}

var merged = merge(
  {name: 'Batou'},
  {city: 'Niihama'}
)

assert(merged.name == 'Batou', 'The original name is intact.')
assert(merged.city == 'Niihama', 'And the city has been copied over.')
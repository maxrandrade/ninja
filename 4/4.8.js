var store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if(!fn.id) {
      fn.id = store.nextId++
      return !!(store.cache[fn.id] = fn) //returning its boolean form so it can be used on assert
    }
  }
}

function ninja(){}
function ninja2(){ return true }

assert(store.add(ninja), 'Function was safely added')
assert(!store.add(ninja), 'But it was only added once')
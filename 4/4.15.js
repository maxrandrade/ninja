// fn.length tells us how many parameters a function expects to receive

function makeNinja(name) {}
function makeSamurai(name, rank) {}
assert(makeNinja.length == 1, 'Only expecting a single argument')
assert(makeSamurai.length == 2, 'Two arguments expected')

// 4.15

function addMethod(object, name, fn) {
  var old = object[name]
  object[name] = function(){
    if (fn.length == arguments.length)
      return fn.apply(this, arguments)
    else if (typeof old == 'function')
      return old.apply(this, arguments)
  }
}

var ninja = {}
addMethod(ninja, 'whatever', function(){ console.log('nenhum argumento') })
addMethod(ninja, 'whatever', function(a){ console.log('um argumento') })
addMethod(ninja, 'whatever', function(a,b){ console.log('dois argumentos') })
// fn.length tells us how many parameters a function expects to receive

function makeNinja(name) {}
function makeSamurai(name, rank) {}
assert(makeNinja.length == 1, 'Only expecting a single argument')
assert(makeSamurai.length == 2, 'Two arguments expected')

// 4.15

// creating a function responsible for adding a new method to an object and it can handle function overloading
function addMethod(object, name, fn) {
  // adding existing method to variable
  var old = object[name]
  // setting a new method with different length to same property
  object[name] = function(){
    // if function length equals to arguments length, it simply executes the given function
    if (fn.length == arguments.length)
      return fn.apply(this, arguments)
    // otherwise it will execute the old function that will eventually find the corrent arguments length through its chain
    else if (typeof old == 'function')
      return old.apply(this, arguments)
  }
}

var ninja = {}
addMethod(ninja, 'whatever', function(){ console.log('nenhum argumento') })
addMethod(ninja, 'whatever', function(a,b,c){ console.log('tres argumento') })
addMethod(ninja, 'whatever', function(a,b){ console.log('dois argumentos') })
addMethod(ninja, 'whatever', function(a,b,c,d){ console.log('quatro argumentos') })
addMethod(ninja, 'whatever', function(a){ console.log('um argumento') })
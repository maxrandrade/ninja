var outerValue = 'ninja'
var later;

function outerFunction() {
  var innerValue = 'samurai'
  
  function innerFunction() {
    console.log(outerValue)
    assert(outerValue == 'ninja', 'I can see the ninja')
    assert(innerValue, 'I can see the samurai')
  }
  later = innerFunction
}


outerFunction()
outerValue = 'saaaa'
later()
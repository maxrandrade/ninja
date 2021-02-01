var outerValue = 'ninja'

function outerFunction() {
  console.log(outerValue)
  assert(outerValue == 'ninja', 'I can see the ninja')
}

outerFunction()
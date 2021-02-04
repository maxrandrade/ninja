var elem, tick, timer

function animateIt(elementId){
  elem = document.getElementById(elementId)
  tick = 0
  timer = setInterval(function() {
    if (tick < 100) {
      console.log(elementId, tick)
      elem.style.left = elem.style.top = tick + 'px'
      tick++
    } else {
      console.log(timer)
      clearInterval(timer)
      assert(tick == 100, 'Tick accessed via a closure')
      assert(elem, 'Element also accessed via a closure')
      assert(timer, 'Timer reference also obtained via a closure')
    }
  }, 200)
}
animateIt('box')
// animateIt('teste')
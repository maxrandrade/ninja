var button = {
  clicked: false,
  click: function() {
    this.clicked = true
    assert(button.clicked, 'The button has been clicked')
  },
}

var elem = document.getElementById('test')
elem.addEventListener('click', button.click, false)
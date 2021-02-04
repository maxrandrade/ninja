jQuery('#testButton').click(function(){
  var elem$ = jQuery('#testSubject')
  elem$.html('Loading')
  jQuery.ajax({
    url: 'test.html',
    success: function(html){
      console.log('inside')
      assert(elem$, 'We can see elem$, via the closure for this callback.')
      elem$.html(html)
    }
  })
})
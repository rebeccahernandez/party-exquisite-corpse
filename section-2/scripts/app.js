$( document ).ready(function() {
  $( ".person-1" ).effect( "shake" );
});

$( document ).ready(function() {
  $( ".person-2" ).effect("easeOutBounce");
});

$( document ).ready(function() {
  $( ".person-3" ).effect( "pulsate" );
});

$(document).bind('mousemove', function(e){
  $('.cursor').css({
    top: e.pageY - $(".cursor").height()/2, // just minus by half the height
    left:  e.pageX - $(".cursor").width()/2 // just minus by half the width
  });

});

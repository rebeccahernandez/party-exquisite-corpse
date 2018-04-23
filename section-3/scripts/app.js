$(document).ready(function() {

  $(document).bind('mousemove', function(e){
   $('.cursor').css({
     top: e.pageY - $(".cursor").height()/2, // just minus by half the height
     left:  e.pageX - $(".cursor").width()/2 // just minus by half the width
   });

});

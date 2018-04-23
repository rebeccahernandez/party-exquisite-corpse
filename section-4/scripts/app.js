//drag!
$(document).ready(function() {
  $('.ball').draggable({
  });

 //bounce when click anywhere
$(document).click(function() {
     $( ".ball" ).effect("bounce", { times:4, distance:200 }, 400);
   });


});

//
// $(document).ready(function(){
//
//       setInterval(function() {
//         $( ".ball" ).effect( "bounce")
//         }, 1000);
// });


//cursor
$(document).bind('mousemove', function(e){
  $('.ball').css({
    top: e.pageY - $(".ball").height()/2, // just minus by half the height
    left:  e.pageX - $(".ball").width()/2 // just minus by half the width
  });

});

//droppable
$(document).ready(function(){
  $( ".cup" ).droppable({
    accept: ".ball"
  });

});

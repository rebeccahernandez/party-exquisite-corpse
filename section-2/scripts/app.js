// $( document ).ready(function() {
//   $( ".person-1" ).effect( "shake", "slow");
// }, 1000);
//
// $( document ).ready(function() {
//   $( ".person-2" ).effect( "shake" );
// });
//
// $( document ).ready(function() {
//   $( ".person-3" ).effect( "pulsate", "slow" );
// });
//
// $(document).setInterval(function() {
//     $(".person-4").effect("bounce",2000)
// }, 1000);


$(document).ready(function(){

      setInterval(function() {
        $( ".person-3" ).effect( "pulsate", "slow" )
        }, 1000);

      setInterval(function() {
        $('.person-4').effect('bounce',1000)
        }, 1000);

      setInterval(function() {
        $('.person-1').effect('shake', "slow")
        }, 2000);

      setInterval(function() {
        $('.person-2').effect('bounce')
      }, 800);

      setInterval(function() {
        $( ".person-5" ).effect( "pulsate", 20)
      }, 500);


});


//cursor
$(document).bind('mousemove', function(e){
  $('.cursor').css({
    top: e.pageY - $(".cursor").height()/2, // just minus by half the height
    left:  e.pageX - $(".cursor").width()/2 // just minus by half the width
  });

});

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

      setInterval(function() {
        $('.person-7').effect('shake')
      }, 1000);

      setInterval(function() {
        $( ".person-6" ).effect( "pulsate", 50)
      }, 700);
});


//cursor
$(document).bind('mousemove', function(e){
  $('.cursor').css({
    top: e.pageY - $(".cursor").height()/2, // just minus by half the height
    left:  e.pageX - $(".cursor").width()/2 // just minus by half the width
  });

});

$(document).hover(function(){
        $( ".person-1" ).effect( "background-color", "pink" )
        });

      

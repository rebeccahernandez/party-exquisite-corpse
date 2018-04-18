//drag!
$(document).ready(function() {
  $('.ball').draggable({
  });

//bounce when click anywhere
$(document).click(function() {
    $( ".ball" ).effect("bounce", { times:4, distance:200 }, 400);
  });


});

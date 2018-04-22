/*
$('.btn1').fadeOut({

}, 1000);
*/


$(document).ready(function() {

$('.button02').click(function() {
	$('.cluster01').fadeOut();
});

$('.button02').click(function(){
	$('.cluster02').fadeOut(1000);
});

$('.button02').click(function(){
	$('.background').fadeOut(1500);
});

});

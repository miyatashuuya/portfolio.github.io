$(function() {
	
	$('.top_menu span').css({ 
		width: $('.top_menu .current').outerWidth(),
		left: $('.top_menu .current').position().left 
	});
	$('.top_menu a').mouseover(function(){
		$('.top_menu span').stop().animate({
			width: $(this).outerWidth(),
			left: $(this).position().left}
		,'fast');
	});
});
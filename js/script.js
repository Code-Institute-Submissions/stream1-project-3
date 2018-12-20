$(document).ready(function() {


	$(".change_color").mouseenter(function() {
		$(this).addClass("font_color");
	});

	$(".change_color").mouseleave(function() {
		$(this).removeClass("font_color");
	});


	$(".index_pics").mouseenter(function() {
		$(this).addClass("pic_bigger");
	});

	$(".index_pics").mouseleave(function() {
		$(this).removeClass("pic_bigger");
	});
	
});


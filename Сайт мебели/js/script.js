/*MenuToggle*/
$(function(){

	$('.menuToggle').on('click', function(){
		$('.topMenu').slideToggle(300, function() {
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});
});

$(function(){
	$('.mainMenuToggle').on('click', function(){
		$('.mainMenuMobile').slideToggle(300, function() {
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});
});

/*Tabs*/
$(".tab_item").not(":first").hide();
$(".container .tab").click(function() {
	$(".container .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

/*toTop*/
$(function() { 
$(window).scroll(function() { 
if($(this).scrollTop() != 0) { 
$('.toTop').fadeIn(); 
} else { 
$('.toTop').fadeOut(); 
} 
}); 
$('.toTop').click(function() { 
$('body,html').animate({scrollTop:0},800); 
}); 
});

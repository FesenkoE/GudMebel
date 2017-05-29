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

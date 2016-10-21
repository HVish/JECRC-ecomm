$(document).ready(function() {
	function marginFix() {
		var navHeight = $('nav').outerHeight();
	    $('.container-fluid').css({
			"margin-top": navHeight
		});
    }
	marginFix();
    $(window).resize(marginFix);
	$('.nav-item a[href="'+location.href.split("/").pop()+'"]').parent().addClass('active');
});

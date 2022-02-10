$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
  
  $('.thumbnail').hover(
        function(){
            $(this).find('.caption').animate({opacity: 0.8}, 400); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').animate({opacity: 0}, 400); //.fadeOut(205)
        }
    );
  
  $("button").hover(function(){
    $(".icon-bar").css("background-color", "#D38947");
    $(".navbar-default .navbar-toggle").css({"border": "1px solid #D38947", "background-color": "transparent"});
  },
      function(){
    $(".icon-bar").css("background-color", "#095057");
    $(".navbar-default .navbar-toggle").css({"border": "1px solid #095057", "background-color": "transparent"});
  });
  
});
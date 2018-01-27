$(document).ready(function (){
     /* $('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span> Back to Top</div>');*/
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    
   
    $('#toTop').click(function()
    {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
   

//show demo wrapper when click on the fa-fw

$('.sett').click(function () {
                $("#demo-wrapper").toggle("slide");
});

//end


 // switcher Colors   
$(".color1" ).click(function(){
   
		$("#demo-wrapper ul li" ).attr("href", "css/Default-theme.css");
		return false;
	});


	$(".color2" ).click(function(){
		$("#demo-wrapper ul li" ).attr("href", "css/gree-theme.css ");
		return false;
        
	});

	$(".color3" ).click(function(){
		$("#demo-wrapper" ).attr("href", "css/pink-theme.css" );
		return false;
	});

	$(".color4" ).click(function(){
		$("#demo-wrapper" ).attr("href", "css/blue-theme.css" );
		return false;
	});

    
    
    
        
        
    
});

 // jQuery for page scrolling feature - requires jQuery Easing plugin
 $(document).on('click', 'a.page-scroll', function(event) {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: ($($anchor.attr('href')).offset().top - 50)
	}, 1250, 'easeInOutExpo');
	
	event.preventDefault();
});




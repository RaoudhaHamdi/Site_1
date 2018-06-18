$(document).ready(function ()
{
    
     $('.carousel').carousel(
   {    interval:10000,
        pause: false
   });
    
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

 // jQuery for page scrolling feature - requires jQuery Easing plugin
 $(document).on('click', ' a.page-scroll ', 
    function(event) 
    {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: ($($anchor.attr('href')).offset().top - 50)
	}, 1200, 'easeInOutExpo');
	
	event.preventDefault();
    });
//End

   });

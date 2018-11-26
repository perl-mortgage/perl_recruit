jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.menu-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    },
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.menu-header').hasClass('is-fixed')) {
		    		$('.menu-header').addClass('is-visible');
		    	} else {
		    		$('.menu-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.menu-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.menu-header').hasClass('is-fixed')) $('.menu-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.menu-primary-nav-trigger').on('click', function(){
		$('.menu-menu-icon').toggleClass('is-clicked');
		$('.menu-header').toggleClass('menu-is-open');

		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.menu-primary-nav').hasClass('is-visible') ) {
			$('.menu-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.menu-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});
		}
	});
});

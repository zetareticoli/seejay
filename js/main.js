$(document).ready(function() {

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    var $masthead = $(".masthead-steps");
	    var $templates = $(".templates");
	    var $aside = $(".menu");
	    var $toggleMenu = $(".toggle-menu");
	    var $head = $(".head-public");

	    if (scroll >= 60) {
	        $masthead.addClass("affixed");
	        $templates.addClass("affixed");
	        $aside.addClass("affixed");
	    }
	    else {
	      	$masthead.removeClass("affixed");
	      	$templates.removeClass("affixed");
	      	$aside.removeClass("affixed");
	    }

	    if (scroll >= 180) {
	        $toggleMenu.addClass("affixed");
	        $head.addClass("affixed");
	    }
	    else {
	      	$toggleMenu.removeClass("affixed");
	      	$head.removeClass("affixed");
	    }
	});

	$('code').each(function(){
	    var text=$(this).html().replace(/</g,'&lt;');
	    var text=text.replace(/>/g,'&gt;');
	    $(this).html(text);
	});

	// Enable all dropdowns

	$('.dropdown-toggle').dropdown();

	$('[data-toggle="tooltip"]').tooltip({'placement': 'top'});

	// Public/Private switch

	$(".story-status").click(function(event){
		$(this).toggleClass("private");
	});

	// Selectable users

	var $selectableUser = $('.avatar-item');

	$selectableUser.click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).toggleClass('selected').toggleClass('pulse');
	});

	// Activate social buttons

	var $socialButton = $('.group-social').children();

	$socialButton.click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).toggleClass('active');
	});

	// Activate contribute location

	var $insertLocation = $('.btn-locate');
	var $locationMap = $('.location');

	$insertLocation.click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).toggleClass('active');
		$locationMap.toggleClass('active').toggleClass('pullDown');
	});

	// Change Password

	var $toggleFieldset = $('.toggle-show')
	var $fieldsetPassword = $('.fieldset-password')

	$toggleFieldset.click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$fieldsetPassword.addClass('visible').addClass('pullDown');
		$(this).hide();
	});

	$('.toggle-hide').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$fieldsetPassword.removeClass('visible').removeClass('pullDown');
		$toggleFieldset.show();
	});

	// Toggle Customize Menu on mobile

	$('.btn-open-close').click(function(event){
		$('.icon-open-close').toggleClass('open');
		$('.menu').toggleClass('open');
	});

	// Toggle share story on mobile

	var $showShare = $('.btn-share');
	var $hideShare = $('.btn-back');

	$showShare.click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('.mobile-share').addClass('visible').addClass('slideDown');
	});

	$hideShare.click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('.mobile-share').removeClass('visible').removeClass('slideDown');
	});


	// Toggles

	$('.buzz-switch').bootstrapSwitch('onText','Curation');
	$('.buzz-switch').bootstrapSwitch('offText','Buzz');

	$(".toggle-switch").iosCheckbox();

	$(".toggle-visibility").click(function(event){
		$(this).toggleClass("hide");
	});

	$('#button-open').click(function(event){
	  event.stopPropagation();
	  event.preventDefault();
	  $(this).toggleClass("open");
	  $('.form-write').toggleClass("visible");
	});
	
	$('.open-settings').click(function(event){
		  event.stopPropagation();
		  event.preventDefault();

		  var my_menu = $(this).data("menu");
		  $('.story-settings-menu').each(function() {
	            if ( $(this).data("menu") == my_menu) {
	                $(this).addClass("visible");
	            }
		  });
	});

	$('.close-settings').click(function(event){
	  event.stopPropagation();
	  event.preventDefault();
  		  var my_menu = $(this).data("menu");
  		  $('.story-settings-menu').each(function() {
  	            if ( $(this).data("menu") == my_menu) {
  	                $(this).removeClass("visible");
  	            }
  		  });
	});

	// CodyHouse Vertical Timeline

	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.timeline-dot, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-dot').hasClass('is-hidden') ) {
				$(this).find('.timeline-dot, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});

	// Royal Slider

	var sliderJQ = $(".royalSlider").royalSlider({
	    addActiveClass: true,
	    arrowsNav: true,
	    arrowsNavAutoHide: false,
	    autoScaleSlider: true,
	    controlNavigation: 'none',
	    imageAlignCenter: false,
	    imageScaleMode: "fill",
	    slidesSpacing: 0,
	    sliderDrag: true,
	    sliderTouch: true,
	    loop: true,
	    fadeinLoadedSlide: false,
	    globalCaption: true,
	    keyboardNavEnabled: true,
	    globalCaptionInside: false,
	        visibleNearby: {
	            enabled: true,
	            centerArea: 0.5,
	            center: true,
	            breakpoint: 620,
	            breakpointCenterArea: 1,
	            navigateByCenterClick: true
	        }
	}); 

	var $container = $('.result-list');
	// initialize Masonry after all images have loaded  
	$container.imagesLoaded(function(){
	  $container.masonry({
	  	columnWidth: 200,
	  	itemSelector: '.result-brick'
	  });
	});

	var $container = $('.section-masonry');
	// initialize Masonry after all images have loaded  
	$container.imagesLoaded(function(){
	  $container.masonry({
	  	columnWidth: 300,
	  	itemSelector: '.brick'
	  });
	});
	
});


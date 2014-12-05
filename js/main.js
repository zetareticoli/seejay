$(document).ready(function() {

	$('code').each(function(){
	    var text=$(this).html().replace(/</g,'&lt;');
	    var text=text.replace(/>/g,'&gt;');
	    $(this).html(text);
	});

	$('.dropdown-toggle').dropdown();

	$(".switch").iosCheckbox();

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

	var $container = $('.result-list');
	// initialize Masonry after all images have loaded  
	$container.imagesLoaded( function() {
	  $container.masonry({
	  	columnWidth: 220,
	  	itemSelector: '.result-element'
	  });
	});
	
});


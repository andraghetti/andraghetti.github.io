// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: trinity.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     var cW = $('.container').width();

     //Adjusting Intro Components Spacing based on detected screen resolution
     $('#intro, .full-height').css('height',vH);
     $('.full-width').css('width',vW);
     $('.half-height').css('height',vH/2);

    //mouse icon fixes
     var fixPerc = (vH * 95 / 100).toFixed(2);
     $('.intro .mouse-icon-wrap').css('top',fixPerc+'px');

    //Left WallPaper Layout
    var lH = $('.left-wallpaper').parent().height();
    $('.left-wallpaper').css('height',lH);
    $('.left-wallpaper').mouseenter(function(){
    });
    var rH = $('.right-wallpaper').parent().height();
    $('.right-wallpaper').css('height',rH);
    $('.right-wallpaper').mouseenter(function(){
    });



//Equi-heigh Divs
$(document).ready(function() {

  if(vW > 1000)
  {
   var maxHeight = -1;

   $('.equal-height-one').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.equal-height-one').each(function() {
     $(this).height(maxHeight);
   });

}

 });



$(window).bind('load', function () { 
    $('.animated').each(function(){ 
        $(this).closest('.inner-section').css('overflow','hidden'); 
    }); 
});



$(document).ready(function() {


    
    //contact form expander
    $('#contact-trigger-button').click(function(){
      $('#contact-form').slideDown(2000);
      $('html, body').animate({scrollTop: ($('#contact-form').offset().top - 0)});
    });


    //Service Details Expander
    $('.service-item a').click(function(){
        var serviceTarget = $(this).attr('data-service-details-expand');
        $('.service-details').slideUp('slow');
        $('#service-details-'+serviceTarget).slideDown('slow');
    });


});


//TWITTER INIT (Updated with compatibility on Twitter's new API):
//PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
$(function ($) {
          $('#ticker').tweet({
              modpath: './twitter/',
              count: 1,
              loading_text: 'loading twitter update...',
              username:'andraghetti'
              /* etc... */
          });
}); 

    //Portfolio Filter Active State
    $('ul#portfolioFilter li').click(function(){
      $('ul#portfolioFilter li').removeClass('active-filter');
      $(this).addClass('active-filter');
    });


    //Highlight the navigation on focusing a section
   $('.standard-nav li > a').click(function(){
        $('.standard-nav li > a').removeClass('highlighted');
        $(this).addClass('highlighted');
    });
    $('.page, .intro').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.standard-nav li > a').removeClass('highlighted');
        $('#'+sectionId+'-linker').addClass('highlighted');
    });

	//BLUR background function
	$(window).scroll(function(e) {
	    var s = $(window).scrollTop(),
	        opacityVal = (s / 150.0);

	    $('.blurred-image').css('opacity', opacityVal);
	});

    //Setup waypoints plugin
    $('.page').first().waypoint(function (event, direction) {

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
          $('.standard-header-top').fadeIn();
          $('.standard-header-bottom').addClass('move-top');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
          $('.standard-header-top').fadeOut();
          $('.standard-header-bottom').removeClass('move-top');
        }

    }, { offset: 150 });
	

});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  


/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

		if( !device.tablet() && !device.mobile() ) {

			/* Activate Parallax effect if non-mobile device is detected*/ 
		  	$('.intro-01').parallax("50%", 0.4);
		  	$('.promotional').parallax("50%", 0.1);
		  	$('.testimonial').parallax("50%", 0.3);
		  	$('.news-head').parallax("50%", 0.6);
		  	$('.project-head').parallax("50%", 0.3);
								
		} else {
			
			/* Dectivate Parallax effect if mobile device is detected (bg image is displayed)*/ 
			$('.parallax').addClass('no-parallax');
			
		}
   		
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	


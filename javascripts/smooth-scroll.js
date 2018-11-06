/* =============================================================

    Smooth Scroll 1.1
    Animated scroll to anchor links.

    Script by Charlie Evans.
    http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links

    Rebounded by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/
    
 * ============================================================= */





/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

        if( !device.tablet() && !device.mobile() ) {

            (function($) {
                jQuery(document).ready(function($) {
                    $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
                        event.preventDefault(); // Prevent the default action from occurring
                        $('html,body').animate({scrollTop:$(this.hash).offset().top-98}, 2000, 'easeInSine'); // Animate the scroll to this link's href value
                    });
                });
            })(jQuery);
                        
        } else {
            
            (function($) {
                jQuery(document).ready(function($) {
                    $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
                        event.preventDefault(); // Prevent the default action from occurring
                        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000, 'easeInSine'); // Animate the scroll to this link's href value
                    });
                });
            })(jQuery);
            
        }
        
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







    


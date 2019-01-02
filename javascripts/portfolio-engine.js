//BxSlider
$(document).ready(function(){
  
  var onMobile = false;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
  
  $('.fullwidth-slider').bxSlider({
    mode: "fade",
    speed: 1000,
    pager: false,
    
    onSlideBefore: function($slideElement) {
      ($slideElement).find('.slide-caption').fadeOut().animate({top:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
      ($slideElement).find('.slide-caption').hide().animate({top:'-100px'});
    },
    onSlideAfter: function($slideElement) {
      ($slideElement).find('.slide-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
    },
    
  });
  
  $('.bx-wrapper .bx-controls-direction a').attr('data-500','top:83%; opacity: 0;').attr('data-start','top:50%; opacity: 1;');
  
  
  
  
  $('.clients-slider').bxSlider({
    pagerCustom: '#bx-pager',
    controls:false,
  });
  
  $('.project-slider').bxSlider({
    controls: true, 
    pager: false,   
    auto:true,
    pause: 3000,
    preloadImages:'all',
    
  });
  

  
});  
  
  
   
  $(document).ready(function($){     
// Portfolio Isotope
  var container = $('#portfolio-wrap'); 
  

  container.isotope({
    animationEngine : 'best-available',
      animationOptions: {
        duration: 200,
        queue: false
      },
    layoutMode: 'fitRows'
  }); 

  $('#filters a').click(function(){
    $('#filters a').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
      container.isotope({ filter: selector });
        setProjects();    
      return false;
  });
    
    
    function splitColumns() { 
      var winWidth = $(window).width(), 
        columnNumb = 1;
      
      
      if (winWidth > 1024) {
        columnNumb = 4;
      } else if (winWidth > 900) {
        columnNumb = 2;
      } else if (winWidth > 479) {
        columnNumb = 2;
      } else if (winWidth < 479) {
        columnNumb = 1;
      }
      
      return columnNumb;
    }   
    
    function setColumns() { 
      var winWidth = $(window).width(), 
        columnNumb = splitColumns(), 
        postWidth = Math.floor(winWidth / columnNumb);
      
      container.find('.portfolio-item').each(function () { 
        $(this).css( { 
          width : postWidth + 'px' 
        });
      });
    }   
    
    function setProjects() { 
      setColumns();
      container.isotope('reLayout');
    }   
    
    container.imagesLoaded(function () { 
      setColumns();
    });
    
  
    $(window).bind('resize', function () { 
      setProjects();      
    });

});










//Expander Slider
function initBxModal() {
    $('.project-slider').bxSlider({
    controls: true, 
    pager: false,   
    auto:true,
    pause: 3000,
    preloadImages:'all',
    
  });
};




//FullScreen Slider
$(function (){
  $('#fullscreen-slider').maximage({
    cycleOptions: {
      fx: 'fade',
      speed: 1000, // Has to match the speed for CSS transitions in $.maximage.css (lines 30 - 33)
      timeout: 5000,
      prev: '#slider_left',
      next: '#slider_right',
      pause: 0,
      before: function(last,current){
        $('.slide-content').fadeOut().animate({top:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
        $('.slide-content').fadeOut().animate({top:'-100px'});
      },
      after: function(last,current){
        $('.slide-content').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
      } 
      
      
          
    },
    
    
    
    onFirstImageLoaded: function(){
      $('#cycle-loader').delay(800).hide();
      $('#fullscreen-slider').delay(800).fadeIn('slow');
      $('.slide-content').fadeIn().animate({top:'0'});
      $('.slide-content a').bind('click',function(event){
        var $anchor = $(this);        
        $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -44
        }, 1500,'easeInOutExpo');       
        event.preventDefault();
        });     
    }
  });

  // Helper function to Fill and Center the HTML5 Video
  $('video,object').maximage('maxcover');
  
  
  
  

  // To show it is dynamic html text
  
});





$(window).load(function() {
  
  
  

  
  
  // Project Page Expander
  
  (function(){
    
      var container = $( "#project-page-holder" );
      var $items = $('#portfolio-wrap .open-project-link');
      index = $items.length;
      $('#portfolio-wrap .open-project-link').click(function(){
  
      if ($(this).hasClass('active')){
      } else 
      { lastIndex = index;
      index = $(this).index();
      $items.removeClass('active');
      $(this).addClass('active');
  
      var myUrl = $(this).find('.open-project').attr("href") + " .item-data"; 
  
      
       
      
      
      $('#project-page-data').animate({opacity:0}, 400,function(){
        
        
        
        $("#project-page-data").load(myUrl,function(e){  
          var $helper = $('.helper');
          var height = $helper.height();
          
          
            $('#project-page-data').css("min-height", height);
              
            $('.project-slider').css({'height' : ''});  
            $('#maximage').css({'height' : ''});  
            
            
            
              $('#maximage').maximage({
                cycleOptions: {
                  fx: 'fade',
                  speed: 1000, // Has to match the speed for CSS transitions in $.maximage.css (lines 30 - 33)
                  timeout: 6000,
                  prev: '#arrow_left',
                  next: '#arrow_right',
                  pause: 1,
                },
              });
            

            
            
            
            
        });
        
        $('#project-page-data').delay(400).animate({opacity:1}, 400);
  
      });
      
      
      $('html, body').animate({ scrollTop: $(".portfolio-bottom").offset().top -40}, 900);
      
      
      //Project Page Open
      
      
      
        $('#project-page-holder').slideUp(600, function(){
          
          $('#project-page-data').css('visibility', 'visible');}).delay(1100).slideDown(1000,function(){          
          
            $('#project-page-data').fadeIn('slow',function(){initBxModal();});
            $('.element_fade_in').each(function () {
              $(this).appear(function() {
                $(this).delay(100).animate({opacity:1,right:"0px"},1000);
              }); 
            });
            
          });
        
        
      }
  
      return false;       
      
      });
  
      //Project Page Close
    
      $(document).on('click', '#project_close', function(event) {
      
        
      $('#project-page-data').animate({opacity:0}, 400,function(){   
        $('#project-page-holder').delay(400).slideUp(400);
        
      });
        
        $('html, body').delay(1000).animate({ scrollTop: $(".portfolio-top").offset().top - 70}, 800);
        $items.removeClass('active') ;
      
        return false;
        
      });
  
  })();

    
});


$(window).load(function() { 
  document.getElementById("all").click();
});




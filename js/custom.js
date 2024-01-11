
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      "images/slide/10.jpg", 
      "images/slide/1.jpg",
      "images/slide/5.jpg",
      "images/slide/9.jpg",
      "images/slide/7.jpg",
      "images/slide/11.jpg",
      "images/17.jpg",
      "images/15.jpg",
      "images/slide/18.jpg",
      "images/19.jpg",
      "images/slide/14.jpg"
    ],  {duration: 8000, fade: 1750});
    
  })(window.jQuery);



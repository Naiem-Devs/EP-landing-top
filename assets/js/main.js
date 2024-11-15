(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".value__slider").owlCarousel({
    loop: true,
    smartSpeed: 1000,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".insta__slider").owlCarousel({
    smartSpeed: 1200,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    stagePadding: 150,
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        stagePadding: 50,
        items: 1
      },
      767: {
        stagePadding: 100,
        items: 2
      },
      992: {
        items: 3
      },
      1300: {
        items: 4
      }
    }
  });


  if (jQuery(window).width() <= 767) {

    $(".business__slider").addClass("owl-carousel")
    jQuery('.business__slider').owlCarousel({
     margin: 30,
      loop: true,
      responsiveClass: true,
      dots: true,
      nav: false,
      autoHeight: false,
      items: 1
    });

    $(".client__slider").addClass("owl-carousel")
    jQuery('.client__slider').owlCarousel({
     margin: 30,
      loop: true,
      responsiveClass: true,
      dots: true,
      nav: false,
      autoHeight: false,
      items: 1
    });
  }

  $('.my-video-links').venobox();

  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);

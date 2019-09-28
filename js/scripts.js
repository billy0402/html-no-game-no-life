$(function () {
   var position = $(window).scrollTop();

   // -----------------------------------------------
   $('.character').mouseenter(function () {
      $(this).stop().animate({ top: -10 }, { duration: 400, easing: 'easeOutBounce' });

   });

   $('.character').stop().mouseleave(function () {
      $(this).animate({ top: 0 }, { duration: 50 });
   });
   // -----------------------------------------------

   // -----------------------------------------------
   $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll > position) {
         $('nav').parent().stop().animate({ top: -40 }, { duration: 400, easing: 'easeOutBounce' });
         $('nav').animate({ top: 40 }, { duration: 400, easing: 'easeOutBounce' });
      } else {
         $('nav').parent().stop().animate({ top: 0 }, { duration: 400, easing: 'easeOutBounce' });
         $('nav').animate({ top: 20 }, { duration: 400, easing: 'easeOutBounce' });
      }

      position = scroll;
   });
   // -----------------------------------------------
});
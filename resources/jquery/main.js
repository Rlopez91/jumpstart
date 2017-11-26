$(document).ready(() => {
  $(window).scroll(function() {
 let scrolledDown = 0;
 let topNav = $(this).scrollTop();

 if(topNav - scrolledDown > 50){
   let navHeight = $('.navbar').css('height');
   $('.navbar').animate({top: '-' + navHeight}, 150);
 }

 else if (scrolledDown + 50 > topNav){
   $('.navbar').animate({top: 0}, 150);
 }
});
})

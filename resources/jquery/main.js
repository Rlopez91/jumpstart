$(document).ready(function(){
  var scrollDown = 0
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop - scrollDown > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      scrollDown = scrollTop;
    }

    else if (scrollDown - scrollTop > 50){
      $('.navbar').animate({top: '0px'}, 150);
      scrollDown = scrollTop;
    }
  });
});

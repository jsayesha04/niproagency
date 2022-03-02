
$(document).ready(function(){


// go to top
$(window).scroll(function() {
  var dictance = $(window).scrollTop();

  if (dictance > 700) {
    $('.top').fadeIn();
  }
  else{
     $('.top').fadeOut();
  };
});
  $('.top').on('click', function(){
    $('html').animate( {scrollTop :0 } );
  });



});


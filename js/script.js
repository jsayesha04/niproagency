
$(document).ready(function(){

// go to top
$(window).scroll(function() {
  var dictance = $(window).scrollTop();
 $('.text').text(dictance);

  if (dictance > 700) {
    $('.t_top').fadeIn();
  }
  else{
     $('.t_top').fadeOut();
  };
});
  $('.t_top').on('click', function(){
    $('html').animate( {scrollTop :0 } );
  });

});

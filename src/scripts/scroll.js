$('.js-scroll').click(function(event){
  event.preventDefault();

  var $this = $(this);
  var targetId = $this.attr('href');

  targetId = targetId.replace('#', '');

  var $target = $('#' + targetId);

  $('html, body').animate({
    scrollTop: $target.offset().top - 60
  }, 600);

});

$window.scroll(function(){
  if ($window.scrollTop() > 0) {
    $('body').addClass('sticky');
  } else {
    $('body').removeClass('sticky');
  }
});
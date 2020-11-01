
//-----------set slider-------------
$(function () {
  $('.slider__items').slick({
    dotsClass: 'dots-slider',
    arrows: false,
    dots: true,
    infinite: true,
    speed: 400,
    fade: true,
    autoplay: false,
  });
});
//-----------end set slider-------------


//--------------Scroll---------------------
$('a.scroll-to').on('click', function (e) {
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(anchor).offset().top - 0
  }, 800);
});
//--------------End Scroll---------------------



//-------------focus Inp---------------------



$(document).ready(function () {
  $('.input-form__tel').focus(function () {
    $('.help-tel').css('display', 'flex')
  })
  $('.input-form__tel').blur(function () {
    $('.help-tel').css('display', 'none')
  })
})




$(document).ready(function () {
  $('.input-form__name').focus(function () {
    $('.help-name').css('display', 'flex')
  })
  $('.input-form__name').blur(function () {
    $('.help-name').css('display', 'none')
  })
})

//-------------End focus Inp---------------------

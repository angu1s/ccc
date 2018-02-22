import style from '../scss/main.scss';

particlesJS.load('banner-particles-center', './banner-particles-center.json');
particlesJS.load('banner-particles-left', './banner-particles-left.json');
particlesJS.load('banner-particles-right', './banner-particles-right.json');

$('.nav-show').on('click', function() {
  $('body').css('overflow-y', 'hidden');
  $('nav').addClass('fixed');
});

$('.nav-close').on('click', function () {
  $('body').css('overflow-y', 'visible');
  $('nav').removeClass('fixed');
});

$('nav a').on('click', function () {
  if ($('nav').hasClass('fixed')) {
    $('nav').removeClass('fixed');
    $('body').css('overflow-y', 'visible');
  }
  var hash = $(this).attr('href');
  console.log(hash);
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800);
});
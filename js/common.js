$(function(){

  // ハンバーガーメニュー
  $('.nav-btn').on("click",function(){
    $('.nav-area,.nav-btn,.mask').toggleClass('open');
  });

  $('.nav-area a').on('click',function(){
    $('.nav-area,.nav-btn,.mask').toggleClass('open');
  });

  $('.mask').on('click',function(){
    $('.nav-area,.nav-btn,.mask').toggleClass('open');
  });

  // footerのslick
  $('.f-slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: 'linear',
    arrows:false,
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    initialSlide: 3,
    variableWidth: true,
  });

});
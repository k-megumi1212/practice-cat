$(function(){

  // ねこ紹介のslick
  $('.wrapper').not(".slick-initialized").slick({
    centerMode: true,
    autoplay: true,
    dots: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

});
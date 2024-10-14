//
// PC版MVとスマホ版MVの切り替え
// URLにハッシュ#があるときスクロールさせる動き
// inview
// PC版MVのslick
// SP版MVのslick
//

$(function () {

  // PC版MVとスマホ版MVの切り替え
  $(window).resize(function(){
    if ($(window).width() <= 768) {// widthが768pxより小さいときの処理
      $('.mv').addClass('sp');
      $('.mv').removeClass('pc');
    } else {
      $('.mv').addClass('pc');
      $('.mv').removeClass('sp');
    };
  });

  // URLにハッシュ#があるときスクロールさせる動き
  var urlHash = location.hash;
  //  URLにハッシュ（#）が存在するならば
  if (urlHash) {
    //  一旦ページ最上部へ移動
    $('body,html').stop().scrollTop(0);
    //  ハッシュのIDを持つタグへ、animateでスクロールして移動
    setTimeout(function () {
      var target = $(urlHash);
      var position = target.offset().top;
      $('body,html').stop().animate({ scrollTop: position }, 500);
    }, 100);
  };

  // inview
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("show");
    }
  });

  // PC版MVのslick
  $('.slide').slick({
    autoplay: true,
    arrows: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnFoucas: false,
    pauseOnHover: false,
  });

  // // SP版MVのslick
  // $('.sp-slide').slick({
  //   autoplay: true,
  //   arrows: false,
  //   fade: true,
  //   speed: 2000,
  //   autoplaySpeed: 4000,
  //   pauseOnFoucas: false,
  //   pauseOnHover: false,
  // });

});
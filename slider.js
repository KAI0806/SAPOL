$('.slider').slick({ //{}を入れる
    autoplay: false,
    autoplaySpeed: 4000, //「オプション名: 値」の形式で書く
	  infinite: true,　　　　//スライドのループ
	  pauseOnHover: false,
    prevArrow: '<button class="slide-arrow prev-arrow">＜</button>',
    nextArrow: '<button class="slide-arrow next-arrow">＞</button>',
    adaptiveHeight:true,
    swipe: true,
    verticalSwiping: false,
    speed: 1000
  });
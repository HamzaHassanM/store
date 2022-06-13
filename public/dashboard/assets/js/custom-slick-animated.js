
$('.slider-animate').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  fade: true,
  dots: false,
}).slickAnimation();


$('.product-slick-animated').slick({
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: 'progressive',
  fade: true,
  asNavFor: '.animated-nav',
}).slickAnimation();


$('.center-home-slider').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
}).slickAnimation();





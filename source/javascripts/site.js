// This is where it all goes :)
$(".slider").slick({
  slidesToShow: 1,
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">←</button>',
        nextArrow: '<button type="button" class="slick-next">→</button>'
      }
    }
  ]
});

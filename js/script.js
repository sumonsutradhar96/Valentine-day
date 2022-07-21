// counter up part start============
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// counter up part end============
// testominial part start============
$('.test_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    prevArrow: '<span class="prev"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fa-solid fa-angle-right"></i></span>',
    responsive: [
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
    }  
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
});
// testominial part end============
// fixed menu start==================
$(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $('#menu_part').addClass('sticky') 
    } 
    else{
        $('#menu_part').removeClass('sticky')
    }
  });

// fixed menu end==================
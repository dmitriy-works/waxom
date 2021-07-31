$(function(){

  $(".rate-star").rateYo({
    rating: 5,
    readOnly: true,
    starWidth: "12px"
  });

  $('.header__burger').on('click', function(){
    $('.header__menu-list').slideToggle();
  });

  $('.header__slider').slick({ 
    dots:true,      
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button class="slick__header-arrow header-prev"><img src="images/header-prev.png" alt="header-prev"></button>',
    nextArrow:'<button class="slick__header-arrow header-next"><img src="images/header-next.png" alt="header-next"></button>',
    fade:true,
    
   
  });

  $(".waxom-slider__inner").slick({    
    slidesToShow: 4,
    slidesToScroll: 2,    
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev-arrow"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next-arrow"></button>',
    responsive: [
    {
      breakpoint: 1198,
      settings: {
        
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 985,
      settings: {        
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 700,
      settings: {        
        slidesToShow: 2,        
      }
    },
    {
      breakpoint: 451,
      settings: {        
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 371,
      settings: {        
        slidesToShow: 1,
      }
    },
  ]
    
  });


  
});
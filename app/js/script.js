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

  // document.querySelector('.play').onclick = play;
  // document.querySelector('.stop').onclick = stop;
  // let video;
  // let display;
  // video =  document.querySelector('.video__item');
  // function play(){
  //   video.play();
  // }
  // function stop(){
  //   video.pause();
  //   video.currenTime = 0;
  // };
  

  $(".resent__inner").slick({
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:'<button class="resent-arrow resent-prev"><img src="images/resent-prev.svg" alt="resent-prev"></button>',
    nextArrow:'<button class="resent-arrow resent-next"><img src="images/resent-next.svg" alt="resent-next"></button>',
    responsive: [
    {
      breakpoint: 1001,
      settings: {
        
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 901,
      settings: {
        
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 612,
      settings: {
        
        slidesToShow: 1,
      }
    },
    ]
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
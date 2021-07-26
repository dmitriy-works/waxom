$(function(){

  $(".rate-star").rateYo({
    rating: 5,
    readOnly: true,
    starWidth: "12px"
  });

  $('.header__burger').on('click', function(){
    $('.header__menu-list').slideToggle();
  });

  $(".header__slider").slick({
    arrows: true,
    dots:true,    
  });

  $(".header__slider").slick({       
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow:'<button class="slick-arrow slick-prev"><img src="images/prev.png" alt=""></button>',
    // nextArrow:'<button class="slick-arrow slick-next"><img src="images/next.png" alt=""></button>',

    responsive: [
    {
      breakpoint: 911,
      settings: {
        slidesToShow: 3,        
        infinite: true,        
      }
    },

    {
      breakpoint: 681,
      settings: {
        slidesToShow: 2,        
        infinite: true,        
      }
    },

    {
      breakpoint: 445,
      settings: {
        slidesToShow: 1,        
        infinite: true,        
      }
    },
        
  ]
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
  });

   $('.header__drop-down.drop-down').on('click', function(){
    $(this).children('.drop-down__list').toggleClass('active');
    $(this).children('.drop-down__link').toggleClass('active');
   
  });

  $(".js-range-slider").ionRangeSlider({
        type: "double",       
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
      $('.products__item').addClass('list');
      $('.icon-th-large').removeClass('active');
      $('.icon-th-list').addClass('active');
    });

    $('.icon-th-large').on('click', function(){
      $('.products__item').removeClass('list');
       $('.icon-th-list').removeClass('active');
       $('.icon-th-large').addClass('active');
      
      
    });

    

  var mixer = mixitup('.products__inner-box');
});
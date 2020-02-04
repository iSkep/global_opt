$(document).ready(function () {
    $('.feedback__slider').slick({
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 10000,
        variableWidth: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg" alt="left arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg" alt="right arrow"></button>',
    });
  });
$(document).ready(function () {
    $('.feedback__slider').slick({
        centerMode: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        variableWidth: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg" alt="left arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg" alt="right arrow"></button>',
    });

    // Modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });

    $('[data-modal=calculation]').on('click', function () {
        $('.overlay, #calc').fadeIn();
    });

    $('.modal__close').on('click', function () {
        $('.modal, .overlay').fadeOut('fast');
    });

    $('.price-item .button').each(function (i) {
        $(this).on('click', function () {
            $('#details .modal__subtitle').text($('.price-item__header').eq(i).text()).css("text-transform", "uppercase");
            $('.overlay, #details').fadeIn();
        });
    });
});
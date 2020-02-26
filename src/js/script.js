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

    $('.menu-btn').on('click', function () {
        $('.menu-btn').toggleClass('menu-btn_active');
        $('.menu').toggleClass('menu_active');
    });

    $('.menu__item').on('click', function () {
        $('.menu-btn').toggleClass('menu-btn_active');
        $('.menu').toggleClass('menu_active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").on("click", function (event) {
        event.preventDefault();
        var _href = $(this).attr('href'),
            top = $(_href).offset().top + "px";
        $('body, html').animate({ scrollTop: top });
    });

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                weight: "required",
                length: "required",
                width: "required",
                height: "required",
                email: {
                    required: true,
                    email: true
                },
                comment: {
                    required: false
                },
            },
            messages: {
                name: {
                    required: "Введите своё имя",
                    minlength: jQuery.validator.format("Минимум {0} символа")
                },
                phone: "Введите номер телефона",
                weight: "Введите вес",
                length: "Введите длину",
                width: "Введите ширину",
                height: "Введите высоту",
                email: {
                    required: "Введите почтовый адрес",
                    email: "Адрес должен быть в формате name@domain.com"
                }
            }
        });
    };

    valideForms('.consultation form');
    valideForms('#consultation form');
    valideForms('#questions form');
    valideForms('#calc form');

    $('input[name=phone]').mask("+38 (099) 999-99-99", { placeholder: "x" });

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: false,       // default
            live: true        // default
        }
    )
    wow.init();
});
$(function () {


    $('.header__slider--body').slick({
        slidesToShow: 1,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev header__slider--btn slider__btn slider__btn--prev"><svg xmlns="http://www.w3.org/2000/svg" width="168.137" height="241.235" viewBox="0 0 168.137 241.235"><g transform="translate(159.652 6) rotate(90)"><line x2="75.583" y2="75.583" transform="translate(151.167)" stroke-linecap="round" stroke-width="12"/><line y1="75.583" x2="75.583" transform="translate(151.167 75.583)" fill="none" stroke-linecap="round" stroke-width="12"/><line x2="226.75" transform="translate(0 75.583)" fill="none" stroke-linecap="round" stroke-width="12"/><g transform="translate(108.651 28.344)"><line x2="47.24" y2="47.24" transform="translate(4.724)" stroke-linecap="round" stroke-width="12"/><line y1="47.24" x2="51.964" transform="translate(0 47.24)" fill="none" stroke-linecap="round" stroke-width="12"/></g></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next header__slider--btn slider__btn slider__btn--next"><svg xmlns="http://www.w3.org/2000/svg" width="168.137" height="241.235" viewBox="0 0 168.137 241.235"><g transform="translate(159.652 6) rotate(90)"><line x2="75.583" y2="75.583" transform="translate(151.167)" fill="none" stroke-linecap="round" stroke-width="12"/><line y1="75.583" x2="75.583" transform="translate(151.167 75.583)" fill="none" stroke-linecap="round" stroke-width="12"/><line x2="226.75" transform="translate(0 75.583)" fill="none" stroke-linecap="round" stroke-width="12"/><g transform="translate(108.651 28.344)"><line x2="47.24" y2="47.24" transform="translate(4.724)" stroke-linecap="round" stroke-width="12"/><line y1="47.24" x2="51.964" transform="translate(0 47.24)" fill="none" stroke-linecap="round" stroke-width="12"/></g></g></svg></button>',
        adaptiveHeight: true,
        appendArrows: '.header__slider--buttons',
        dots: true,
        dotsClass: 'header__slider--dots-list slider__dots-list',
        appendDots: '.header__slider--dots'
    });
    $('.advice__slider--body').slick({
        slidesToShow: 1,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev advice__slider--btn slider__btn slider__btn--prev"><svg xmlns="http://www.w3.org/2000/svg" width="168.137" height="241.235" viewBox="0 0 168.137 241.235"><g transform="translate(159.652 6) rotate(90)"><line x2="75.583" y2="75.583" transform="translate(151.167)" stroke-linecap="round" stroke-width="12"/><line y1="75.583" x2="75.583" transform="translate(151.167 75.583)" fill="none" stroke-linecap="round" stroke-width="12"/><line x2="226.75" transform="translate(0 75.583)" fill="none" stroke-linecap="round" stroke-width="12"/><g transform="translate(108.651 28.344)"><line x2="47.24" y2="47.24" transform="translate(4.724)" stroke-linecap="round" stroke-width="12"/><line y1="47.24" x2="51.964" transform="translate(0 47.24)" fill="none" stroke-linecap="round" stroke-width="12"/></g></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next advice__slider--btn slider__btn slider__btn--next"><svg xmlns="http://www.w3.org/2000/svg" width="168.137" height="241.235" viewBox="0 0 168.137 241.235"><g transform="translate(159.652 6) rotate(90)"><line x2="75.583" y2="75.583" transform="translate(151.167)" fill="none" stroke-linecap="round" stroke-width="12"/><line y1="75.583" x2="75.583" transform="translate(151.167 75.583)" fill="none" stroke-linecap="round" stroke-width="12"/><line x2="226.75" transform="translate(0 75.583)" fill="none" stroke-linecap="round" stroke-width="12"/><g transform="translate(108.651 28.344)"><line x2="47.24" y2="47.24" transform="translate(4.724)" stroke-linecap="round" stroke-width="12"/><line y1="47.24" x2="51.964" transform="translate(0 47.24)" fill="none" stroke-linecap="round" stroke-width="12"/></g></g></svg></button>',
        adaptiveHeight: true,
        appendArrows: '.advice__slider--buttons',
        dots: true,
        dotsClass: 'advice__slider--dots-list slider__dots-list',
        appendDots: '.advice__slider--dots',
        lazyLoad: 'ondemand',
    });


    let headerDotsLength = 0, adviceDotsLength = 0;
    $.each($('.header__slider--dots li'), function () {
        headerDotsLength++;
        if (headerDotsLength < 10) {
            $('.header__slider--dots-length').html('0' + headerDotsLength);
        }
        else {
            $('.header__slider--dots-length').html(headerDotsLength);
        }
    })
    $.each($('.advice__slider--dots li'), function () {
        adviceDotsLength++;
        if (adviceDotsLength < 10) {
            $('.advice__slider--dots-length').html('0' + adviceDotsLength);
        }
        else {
            $('.advice__slider--dots-length').html(adviceDotsLength);
        }
    })

    let image_src_bg = '.webp-bg';

    function ThisIsWebP() {
        let def = $.Deferred(), crimg = new Image();
        crimg.onload = function () { def.resolve(); };
        crimg.onerror = function () { def.reject(); };
        crimg.src = "https://simpl.info/webp/cherry.webp";
        return def.promise();
    }

    ThisIsWebP().then(function () {
        $.each($(image_src_bg), function () {
            return false;
        });
    }, function () {
        $.each($(image_src_bg), function () {
            image_src = $(this).data('notwebp');
            $(this).css('background-image', 'url("' + image_src + '")');

        });
    });

    let imgSrcSetAdvice, imgSrcSetHeader, widthScrollBar;
    $('.advice__slider--body').on('lazyLoaded', function (e) {
        imgSrcSetAdvice = $(e.target).find('.slick-current').find('source');
        $(imgSrcSetAdvice).attr('srcset', $(imgSrcSetAdvice).data('lazy-srcset'))
        $(imgSrcSetAdvice).parent('.slider__item').css('opacity', '1');
    });
    $('.header__slider--body').on('lazyLoaded', function (e) {
        imgSrcSetHeader = $(e.target).find('.slick-current').find('source');
        $(imgSrcSetHeader).attr('srcset', $(imgSrcSetHeader).data('lazy-srcset'))
        $(imgSrcSetHeader).parent('.slider__item').css('opacity', '1');
    });
    function widthScrollBarFunc() {
        widthScrollBar = $('body').css('overflow', 'hidden').width();
        widthScrollBar = widthScrollBar - $('body').css('overflow', 'visible').width();
    }

    function widthSpecialBlock() {
        widthChallengesTop = $('.challenges__special--subtitle span').width() - 50;
        if (widthChallengesTop > $('.challenges__special--top').width()) {
            $('.challenges__special--top').css('width', widthChallengesTop + 'px');
        }
        else if (widthChallengesTop < $('.challenges__special--top').width()) {
            widthChallengesTop = $('.challenges__special--top').width() + 15;
            $('.challenges__special--top').css('width', widthChallengesTop + 'px');
        }
    }

    let ddList = $('.dd-list'),
        widthChallengesTop,
        screenCheck950 = false, screenCheck2 = false, screenCheck1336 = false;
    function screenSize() {

        if ($(window).width() > 1336 && screenCheck1336 == false) {
            screenCheck1336 = true;
            widthSpecialBlock()
        }
        else if ($(window).width() < 1336) {
            screenCheck1336 = false;
        }
        if ($(window).width() >= 950) {
            if (screenCheck950 == false) {
                screenCheck950 = true;
                screenCheck2 = false;
                $(ddList).removeClass('active');
                $('.burger, .menu__nav, .wrapper').removeClass('active');
                $('.wrapper').css('transform', 'translate(0)');
                $('body').removeClass('lock');
                $('.settings__search').hover(function () {

                },
                    function () {
                        if ($(window).width() > 950) {
                            $('.settings__search input').blur();
                        }
                    });
            }
        }
        else if ($(window).width() <= 950) {
            if (screenCheck2 == false) {
                screenCheck950 = false;
                screenCheck1220 = false;
                screenCheck2 = true;
            }
        }
    }
    screenSize(); widthScrollBarFunc();
    $(window).resize(function () {
        screenSize(); widthScrollBarFunc();
    });

    $('.wrapper').on('click', function () {
        if ($(this).hasClass('active')) {
            $('.burger, .menu__nav, .menu').removeClass('active');
            $('body').removeClass('lock');
        }
        $(this).removeClass('active');
        $('.wrapper').css('transform', "translateX(0)")
    });

    let menuActive = false, mWidth = $('.menu__nav').width();
    $('.burger').on('click', function () {
        if (menuActive == false) {
            menuActive = true;
            $(this).toggleClass('active');
            $('.menu__nav, .menu').toggleClass('active');
            $('body').toggleClass('lock');
            mWidth = $('.menu__nav').width();
            if ($(this).hasClass('active')) {
                $('.wrapper').addClass('active').css('transform', "translateX(-" + mWidth + "px" + ")")
            }
            else {
                $('.wrapper').css('transform', "translateX(0)").removeClass('active');
            }
            menuActive = false;
        }
    });
    $('body').on('click', function (e) {
        if (($(ddList).parent().has(e.target).length != 0) && screenCheck950 == false) {
            $(ddList).removeClass('active');
            $(e.target).addClass('active');
            $(e.target).next('.dd-list').addClass('active');
        }
        else if ($(ddList).prev(e.target).length != 0) {
            $(ddList).removeClass('active');
            $(ddList).prev().removeClass('active');

        }
    });

    $('.settings__login').on('click', function () {
        $('.settings__language--title').removeClass('active');
    });

    $('.dd-list__item').on('click', function () {
        $(ddList).removeClass('active');
        $(ddList).prev().removeClass('active');
    });

    let scrollName, scrollElem, scrollTop, start_scroll = false;
    $('.btn-scroll').on('click', function (e) {
        e.preventDefault();
        if (start_scroll == false) {
            start_scroll = true;

            scrollName = $(this).attr('href'),
                scrollElem = $(scrollName),
                scrollTop = scrollElem.offset().top;

            if ($('.menu').offset().top > scrollTop + 300) {
                scrollTop = scrollTop - 50;
            }

            $('.burger, .menu__nav, .wrapper').removeClass('active');
            $('body').removeClass('lock');

            $('.wrapper').css('transform', 'translate(0)');

            $('html, body').animate({
                scrollTop: scrollTop
            }, 1500);

            setTimeout(function () {
                start_scroll = false;
            }, 1500);
        }
    });

    $('.form-open').magnificPopup({
        type: 'inline',
        preloader: false
    });

    $('.search__btn').on('click', function (e) {
        if ($(this).prev().val() == '') {
            e.preventDefault();
        }
    });

    function formKeySwitch(settings) {
        let form_input = settings.formElem,
            inputChek = true,
            inputLength = form_input.length - 1,
            inputLast = $(form_input[inputLength]).data('input-id'),
            inputId;

        function nextInput(e) {
            if (e.data('input-id') != inputLast && inputChek == true) {
                inputChek = false;
                inputId = e.data('input-id');
                inputId = inputId + 1;
                $('.form-input[data-input-id|="' + inputId + '"]').focus();
                inputChek = true;
                setTimeout(function () {
                    inputChek = true;
                }, 250);
            }
        }
        function prevInput(e) {
            if (e.data('input-id') != 1 && inputChek == true) {
                inputChek = false;
                inputId = e.data('input-id');
                inputId = inputId - 1;
                $('.form-input[data-input-id|="' + inputId + '"]').focus();
                setTimeout(function () {
                    inputChek = true;
                }, 250);
            }
        }

        $(form_input).focus(function () {
            $(this).on('keydown', function (e) {
                if (e.which == 40) {
                    nextInput($(this));
                }
                if (e.which == 38) {
                    prevInput($(this));
                }
            });
        })
    }

    formKeySwitch({
        formElem: $('.form-input'),
    });

    function hHeader(settings) {

        settings.fade = false;
        settings.speedAnim = 200;

        let header = settings.elemName,
            distance = settings.distance,
            scrollPrev = 0, ifHeaderTopClass = settings.ifHeaderTop[0], ifHeaderTopDistance = settings.ifHeaderTop[1],
            scrollDown = distance,
            distanceHide = settings.distanceHide,
            distanceShow = settings.distanceShow,
            scrolled = $(window).scrollTop(),
            scrollDownCheck = false,
            scrollTop = 0,
            scrollTopCheck = false,
            scrollToTop = false,
            scrollToDown = false,
            classAnchor = settings.classAnchor, disableScriptCheck = false;

            scrollDown = distanceHide;

        function ifHeaderTop() {
            if (scrolled <= ifHeaderTopDistance && typeof ifHeaderTopClass == 'string') {
                $(header).addClass(ifHeaderTopClass);

                $.each($('[data-hh-anchor]'), function () {
                    $(this).addClass($('[data-hh-anchor]').data('hh-anchor'));
                })
            }
            else if (scrolled > ifHeaderTopDistance && typeof ifHeaderTopClass == 'string') {
                $(header).removeClass(ifHeaderTopClass);
                $.each($('[data-hh-anchor]'), function () {
                    $(this).removeClass($('[data-hh-anchor]').data('hh-anchor'));
                })
            }
        }
        ifHeaderTop();

        $(window).scroll(function () {
            if (disableScriptCheck == false) {
                scrolled = $(window).scrollTop();
                if (scrolled == 0) {
                    if (settings.classToHide == undefined) {
                        if (settings.fade == true) {
                            $(header).fadeIn(settings.speedAnim);
                        }
                        else if (settings.fade == false) {
                            $(header).slideDown(settings.speedAnim);
                        }

                    }
                    else {
                        $(header).removeClass(settings.classToHide);
                    }
                    scrollTopCheck = true;
                }

                if (typeof ifHeaderTopClass == 'string') {
                    ifHeaderTop();
                }

                if (scrolled > 100 && scrolled > scrollPrev) {
                    if (scrollToDown == false) {
                        scrollToTop = false;
                        scrollDown = scrolled + distanceHide;
                        scrollDownCheck = false;
                        scrollToDown = true;
                    }

                } else if (scrollToTop == false) {

                    scrollToDown = false;
                    scrollTop = scrolled - distanceShow;
                    scrollTopCheck = false;
                    scrollToTop = true;
                }

                scrollPrev = scrolled;
                if (scrolled >= scrollDown && scrollDownCheck == false) {
                    $(header).addClass(settings.classToHide);
                    if (classAnchor == true) {
                        $.each($('[data-hh-anchor]'), function () {
                            $(this).addClass($('[data-hh-anchor]').data('hh-anchor'));
                        })
                    }
                    scrollDownCheck = true;
                }
                if (scrollTop >= scrolled && scrollTopCheck == false) {
                    $(header).removeClass(settings.classToHide);
                    if (classAnchor == true) {
                        $.each($('[data-hh-anchor]'), function () {
                            $(this).removeClass($('[data-hh-anchor]').data('hh-anchor'));
                        })
                    }
                    scrollTopCheck = true;
                }
            }
        });
}

    hHeader({
        elemName: $('.menu'),
        classToHide: 'hide',
        distanceHide: 300,
        distanceShow: 100,
        ifHeaderTop: ['top', 0],
        classAnchorForTop: true
    });

    $('[data-placeholder]').focus(function () {
        $(this).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    })


    $('.form-open').on('mfpOpen', function (e) {
        $('.menu').addClass('none-anim').css('padding-right', widthScrollBar + 'px')
    });
    $('.form-open').on('mfpClose', function (e) {
        $('.menu').css('padding-right', 0 + 'px');
        setTimeout(function () {
            $('.menu').removeClass('none-anim');
        }, 200)
    });

    AOS.init();

});


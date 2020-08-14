$(function () {
    let ddList = $('.dd-list'),
        langTitle = $('.settings__language--title'),
        screenCheck950 = false, screenCheck2 = false;
    function screenSize() {
        if ($(window).width() >= 950) {
            if (screenCheck950 == false) {
                screenCheck950 = true;
                screenCheck2 = false;
                $(ddList).removeClass('active');
                $(langTitle).removeClass('active');
                $('.burger, .menu, .wrapper').removeClass('active');
                $('.menu').removeClass('anim-speed');
                $('.wrapper').css('transform', 'translate(0)');
                $('body').removeClass('lock');
            }
        }
        else if ($(window).width() <= 950) {
            if (screenCheck2 == false) {
                screenCheck950 = false;
                screenCheck2 = true;
                $('.menu').addClass('anim-speed');
                //transition: ;
            }
        }
    }
    screenSize();
    $(window).resize(function () {
        screenSize();
    });

    $('.wrapper').on('click', function () {
        if ($(this).hasClass('active')) {
            $('.burger, .menu').removeClass('active');
            $('body').removeClass('lock');
        }
        $(this).removeClass('active');
        $('.wrapper').css('transform', "translateX(0)")
    });

    let menuActive = false, mWidth = $('.menu').width() - 15;
    $('.burger').on('click', function () {
        if (menuActive == false) {
            menuActive = true;
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
            $('body').toggleClass('lock');
            mWidth = $('.menu').width() - 15;
            if ($(this).hasClass('active')) {
                $('.wrapper').css('transform', "translateX(-" + mWidth + "px" + ")")
                setTimeout(function (){
                    $('.wrapper').addClass('active');                    
                }, 200)
            }
            else {
                $('.wrapper').css('transform', "translateX(0)")
                setTimeout(function () {
                    $('.wrapper').removeClass('active');
                }, 200)
            }
            menuActive = false;
        }
    });

    $('body').on('click', function (e) {
        if (($(ddList).parent().has(e.target).length != 0) && screenCheck950 == false) {
            
            $(ddList).removeClass('active');
            //$(ddList).prev().removeClass('active');
            $(e.target).addClass('active');
            $(e.target).next('.dd-list').addClass('active');
        }
        else if ($(ddList).prev(e.target).length != 0) {
            $(ddList).removeClass('active');
            $(ddList).prev().removeClass('active');
            
        }
    });

    $('.settings__login').on('click', function() {
        $('.settings__language--title').removeClass('active');
    });

    $('.dd-list__item').on('click', function() {
        $(ddList).removeClass('active');
        $(ddList).prev().removeClass('active');
    });

    $('.form-open').magnificPopup({
        type: 'inline',
        preloader: false
    });

    $('.search__btn').on('click', function(e) {        
        if($(this).prev().val() == '') {
            e.preventDefault();
        }
    });

    function formKeySwitch(settings) {
        if (settings.formElem == undefined) {
            return false;
        }

        let form_input = settings.formElem,
            inputChek = true,
            focusClass = settings.focusClass,
            inputLength = form_input.length - 1,
            inputLast = $(form_input[inputLength]).data('input-id'),
            inputId;


        if (settings.focusClass == undefined) {
            focusClass = 'focus';
        }

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

            //$(this).parent().addClass(focusClass);
            //$(this).prev().addClass(focusClass);
            $(this).on('keydown', function (e) {
                if (e.which == 40) {
                    nextInput($(this));
                    //console.log(0);
                }
                if (e.which == 38) {
                    prevInput($(this));
                }
            });
        })
            .blur(function () {
                /* if ($(this).val() == '') {
                    $(this).prev().removeClass(focusClass);
                } */
                //$(this).parent().removeClass(focusClass);
            });
    }

    formKeySwitch({
        formElem: $('.form-input'),
        //focusClass: 'focus'
    });

    function hHeader(settings) {
        
        if (settings == undefined) {
            return false;
        }
    
        if (settings.elemName == undefined) {
            return false;
        }
    
        if (settings.distance == undefined) {
            settings.distance = 500;
        }
    
        if (settings.fade == undefined) {
            settings.fade = false;
        }
    
        if (settings.speedAnim == undefined) {
            settings.speedAnim = 200;
        }

    
    
        let header = settings.elemName,
            distance = settings.distance,
            scrollPrev = 0, ifHeaderTopClass, ifHeaderTopDistance,
            scrollDown = distance,          
            distanceHide = settings.distanceHide,
            distanceShow = settings.distanceShow,
            scrolled = $(window).scrollTop(),
            scrollDownCheck = false,
            scrollTop = 0,
            scrollTopCheck = false,
            scrollToTop = false,
            scrollToDown = false,
            classAnchor = settings.classAnchor, classAnchorForTop = settings.classAnchorForTop;
            

            
        
        if(typeof distanceHide == 'number') {
            scrollDown = distanceHide;
        }        

        if(settings.ifHeaderTop != undefined) {
            ifHeaderTopClass = settings.ifHeaderTop[0];
            ifHeaderTopDistance = settings.ifHeaderTop[1];
        }
        

        function ifHeaderTop() {
            if(scrolled <= ifHeaderTopDistance && typeof ifHeaderTopClass == 'string') {
                $(header).addClass(ifHeaderTopClass);
                if(classAnchorForTop == true) {
                    $(header).addClass($('[data-hh-anchor]').data('hh-anchor'));
                    $.each($('[data-hh-anchor]'), function() {                            
                        $(this).addClass($('[data-hh-anchor]').data('hh-anchor'));
                    })
                }
            }
            else if (scrolled > ifHeaderTopDistance && typeof ifHeaderTopClass == 'string') {
                $(header).removeClass(ifHeaderTopClass);
                if(classAnchorForTop == true) {
                    $.each($('[data-hh-anchor]'), function() {                            
                        $(this).removeClass($('[data-hh-anchor]').data('hh-anchor'));
                    })
                }
            }
        }
        if(typeof ifHeaderTopClass == 'string') {
            ifHeaderTop();
        }

        $(window).scroll(function () {
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
            
            if(typeof ifHeaderTopClass == 'string') {
                ifHeaderTop();
            }
    
            if (scrolled > 100 && scrolled > scrollPrev) {
                if (scrollToDown == false) {
                    scrollToTop = false;
                    
                    if(typeof distanceHide == 'number') {
                        scrollDown = scrolled + distanceHide;
                    }
                    else {
                        scrollDown = scrolled + distance;
                    }
                    scrollDownCheck = false;
                    scrollToDown = true;
                }
                
            } else if (scrollToTop == false) {
                
                    scrollToDown = false;
                    if(typeof distanceShow == 'number') {
                        scrollTop = scrolled - distanceShow;
                    }
                    else {
                        scrollTop = scrolled - distance;
                    }
                    scrollTopCheck = false;
                    scrollToTop = true;
                }
                
            scrollPrev = scrolled;
            if (scrolled >= scrollDown && scrollDownCheck == false) {
                // hide elem
                
                if (settings.classToHide == undefined) {
                    if (settings.fade == true) {
                        $(header).fadeOut(settings.speedAnim);
                    }
                    else if (settings.fade == false) {
                        $(header).slideUp(settings.speedAnim);
                    }
                    if(classAnchor == true) {
                        $.each($('[data-hh-anchor]'), function() {                            
                            $(this).addClass($('[data-hh-anchor]').data('hh-anchor'));
                        })
                    }
                }
                else {
                    $(header).addClass(settings.classToHide);
                    if(classAnchor == true) {
                        $.each($('[data-hh-anchor]'), function() {                            
                            $(this).addClass($('[data-hh-anchor]').data('hh-anchor'));
                        })
                    }
                }
                scrollDownCheck = true;
            }
            if (scrollTop >= scrolled && scrollTopCheck == false) {
                // show elem
                if (settings.classToHide == undefined) {
                    if (settings.fade == true) {
                        $(header).fadeIn(settings.speedAnim);
                    }
                    else if (settings.fade == false) {
                        $(header).slideDown(settings.speedAnim);
                    }
                    if(classAnchor == true) {
                        $.each($('[data-hh-anchor]'), function() {                            
                            $(this).removeClass($('[data-hh-anchor]').data('hh-anchor'));
                        })
                    }
                }
                else {
                    $(header).removeClass(settings.classToHide);
                    if(classAnchor == true) {
                        $.each($('[data-hh-anchor]'), function() {                            
                            $(this).removeClass($('[data-hh-anchor]').data('hh-anchor'));
                        })
                    }
                }
                scrollTopCheck = true;
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

});
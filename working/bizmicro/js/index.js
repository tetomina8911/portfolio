
//index.js
$(document).ready(function(){
    //selectbox
    $('.slectbox_type1').children('.current').click(function(){
        $(this).parent().children('ul').slideToggle();
    });

    //gnb
    $('#header .btn_menu').click(function(){
        $('#quick_bar').stop().fadeOut('fast');
        $('#header').css('z-index','2000');

        $('html').addClass('hidden');
        $('body').addClass('hidden');
        $('#gnb_container').stop().fadeIn('fast');
    });

    $('#gnb_container .btn_close').click(function(){
        $('#quick_bar').stop().fadeIn('fast');
        $('#header').css('z-index','1000');

        $('html').removeClass('hidden');
        $('body').removeClass('hidden');
        $('#gnb_container').stop().fadeOut('fast');
    });

    $('#gnb_container > ul > li.label').click(function(){
        $('#gnb_container > ul > li.label > a').removeClass('current');
        $(this).children('a').addClass('current');
        $('.snb_wrapper').stop().slideUp();
        $(this).children('.snb_wrapper').stop().slideToggle();
    });

    
    $('#quick_bar .quick_icon').click(function(){
        $('#quick_bar ul').stop().fadeIn();
        $('#quick_bar .quick_x').fadeIn('fast');
    });
    $('#quick_bar .quick_x').click(function(){
        $('#quick_bar ul').stop().fadeOut('fast');
        $('#quick_bar .quick_x').fadeOut('fast');
    });

    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        $('.quick_top').click(function(){
            $('html,body').stop().animate({
                scrollTop : '0'
            }, 200);
        });

    });

    $('.btn_privacy').click(function(){
        $('.layer_pop_privacy').stop().fadeIn();
        $('#layer_bg').stop().fadeIn();
        $('html,body').addClass('hidden');

        $('.layer_pop_privacy').off('scroll touchmove mousewheel');
    });
    
    $('.btn_email').click(function(){
        $('.layer_pop_email').stop().fadeIn();
        $('#layer_bg').stop().fadeIn();
        $('html,body').addClass('hidden');
    });

    $('#layer_popup .btn_x').click(function(){
        $('.layer_pop_privacy').stop().fadeOut('fast');
        $('.layer_pop_email').stop().fadeOut('fast');
        $('#layer_bg').stop().fadeOut('fast');
        $('html,body').removeClass('hidden');
    });


});



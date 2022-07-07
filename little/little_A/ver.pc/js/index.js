

$(document).ready(function(){

    //GNB
    $("#gnb ul li a").mouseenter(function(){
        $('#gn_menu').stop().fadeIn('150');
        $('#gn_bg').stop().fadeIn('150');
    });
    $("#gnb").mouseleave(function(){
        $('#gn_menu').stop().fadeOut('150');
        $('#gn_bg').stop().fadeOut('150');
    });

    //검색창
    $(".left_top").click(function(){
        $('#gn_bg').stop().fadeIn('150').css('z-index','101');
        $('#search_area').stop().fadeIn('150');
        $('html').css('overflow','hidden');
        $('body').css('overflow','hidden');
    });
    $("#search_area .search_close").click(function(){
        $('#gn_bg').stop().fadeOut('150').css('z-index','99');
        $('#search_area').stop().fadeOut('150');
        $('html').css('overflow','visible');
        $('body').css('overflow','visible');
        $('#search_area .resualt_box').fadeOut('150');
    });
    $('.choice_box ul li').click(function(){
        $(this).toggleClass('on');
    });

    $('#search_area .choice_box .return_subject').click(function(){
        $('#search_area .choice_box').fadeOut();
        $('#search_area .subject_box').fadeIn();
    });
    $('#search_area .subject_box .return_choice').click(function(){
        $('#search_area .subject_box').fadeOut();
        $('#search_area .choice_box').fadeIn();
    });
    $('#search_area .choice_box .red_search').click(function(){
        $('#search_area .resualt_box').fadeIn();
    });

    
    $(".tab_box").hide();
    $('.tab_box').eq(0).show();
    $(".tab_area > a").click(function(){
        var clickNum = $(".tab_area a").index($(this));

        $('.tab_box').hide();
        $('.tab_box').eq(clickNum).show();
        $('.tab_area>a').removeClass('on');
        $(this).addClass('on');                                
    });

    $('#quick').click(function(){
        $('#inquiry').fadeIn();
        $('#gn_bg').stop().fadeIn('150').css('z-index','101');
        $('html').css('overflow','hidden');
        $('body').css('overflow','hidden');
    });
    $('#inquiry').click(function(){
        $('#inquiry').fadeOut('150');
        $('#gn_bg').stop().fadeOut('150').css('z-index','99');
        $('html').css('overflow','visible');
        $('body').css('overflow','visible');
    });



    $('.slider').bxSlider({
        mode: 'fade',
        pager: true,
        controls: false,
        auto: true,
        speed: 1000,
        pause: 3000,
    });

    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
        width: 1200,
        loop: true,
        speed : 2000,
        autoplay: {
            delay: 1500,
        },
    });
    
});



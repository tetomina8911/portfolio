
//index.js
$(document).ready(function(){
    var mySwiperF = new Swiper('.swiper-container-f', {
        effect : 'fade',
        speed: 1000,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
        },
        loop : true,
        pagination: {
            el: '.swiper-pagi',
            type: 'bullets',
            clickable : true,
        },

        
    });
    
    var mySwiper02 = new Swiper('.swiper-container-02', {
        speed: 1000,
        spaceBetween: 20,
        loop : true,
        slidesPerView : 1.9,
        centeredSlides: true,
        //slideToClickedSlide: true,
        autoplay: {
            delay: 2500,
        },
        navigation: {
            nextEl: '.swiper-controls .btn_next',
            prevEl: '.swiper-controls .btn_prev',
        },

    });

    $('.swiper-controls .btn_pause').click(function(){
        mySwiper02.autoplay.stop();
        $(this).hide();
        $('.swiper-controls .btn_play').show().css('display','inline-block');
    });
    
    $('.swiper-controls .btn_play').click(function(){
        mySwiper02.autoplay.start();
        $(this).hide();
        $('.swiper-controls .btn_pause').show().css('display','inline-block');
    });



    
    var mySwiper04 = new Swiper('.swiper-container-04', {
        speed: 1000,
        spaceBetween: 0,
        loop : true,
        width: 184,
        loopAdditionalSlides : 100,
		
        
    });


    $('#header .btn_menu').click(function(){
        $('#gnb_area').stop().fadeIn();
        $('html').addClass('hidden');
        $('body').addClass('hidden');
    });

    $('#gnb_area .btn_close').click(function(){
        $('#gnb_area').stop().fadeOut();
        $('html').removeClass('hidden');
        $('body').removeClass('hidden');
    });


    $(window).scroll(function() {
        if ($(document).scrollTop() > 300) {
            $("#header").addClass("white_bg");
            $("#header .btn_menu_bl").fadeIn("fast");
            $("#header .btn_menu_wh").hide();
        } else {
            $("#header").removeClass("white_bg");
            $("#header .btn_menu_wh").fadeIn("fast");
            $("#header .btn_menu_bl").hide();
        }
    });


    $('.tab_list li').click(function(){
        var clickNum = $('.tab_list li').index($(this));

        $('.tab_list li').removeClass('on');
        $(this).addClass('on');

        $('.tab_box li').hide();
        $('.tab_box li').eq(clickNum).show();

    });

    
});



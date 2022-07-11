
//index.js
$(document).ready(function(){

    //Horizen Swiper
    var mySwiperH = new Swiper('.swiper-container-h', {
        effect : 'slide',
        slidesPerView: 1,
        speed: 1000,
        centeredSlides: true, 
        mousewheel: true,  
        grabCursor: true,
    });

    
    //Fade Swiper
    var mySwiperF = new Swiper('.swiper-container-f', {
        effect : 'fade',
        slidesPerView: 1,
        speed: 1000,
        centeredSlides: true, 
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    //fade효과롤링 자동 일시정지,재생 controls
    $('.btn_pause').click(function(){
        $(this).fadeOut(250);
        $('.btn_play').fadeIn(250);
        mySwiperF.autoplay.stop();
    });    
    $('.btn_play').click(function(){
        $(this).fadeOut(250);
        $('.btn_pause').fadeIn(250);
        mySwiperF.autoplay.start();
    });

    
    //GNB
    $('.btn_gnb').click(function(){
        $('#gnb_area').fadeIn();
        $('.btn_close').fadeIn();
        $('#gn_bg').fadeIn();
        $(this).fadeOut();
        $('#logo').fadeOut();
    });
    $('.btn_close').click(function(){
        $('#gnb_area').fadeOut();
        $('.btn_close').fadeOut();
        $('#gn_bg').fadeOut();
        $('.btn_gnb').fadeIn();
        $('#logo').fadeIn();
    });
    

    //헤더 퀵메뉴 마우스오버 효과
    $('#header .shorcut_area li').hover(function(){
        $(this).children('span').stop().fadeToggle(150);
    });


    var win_H = $(window).height();

    var win_A = win_H-1080;
    var win_B = win_A/2;


    
    //window높이별 적용
    if(win_H <= 1080){
        //$('.swiper-slide').css('height',win_H+('px'));
        //$('.swiper-slide>img').css('margin-top',win_B+('px'));
        //$('.bxslider img').css('margin-top',win_B+('px'));
        //$('.inquiry_box').css('height',win_H+('px'));
        //$('.inquiry_box .in_order img').css('margin-top',win_B+('px'));

    }else{
        //$('.swiper-slide').css('height',win_H+('px'));
    }


    //스크롤 페이지 높이 설정
    $('.rolling_area').css('height',win_H+('px'));

    
    //문의하기 화살표 효과
    $('.inquiry_box').mouseenter(function(){
        $(this).children('span').stop().fadeOut();
    });
    $('.inquiry_box').mouseleave(function(){
        $(this).children('span').stop().fadeIn();
    });

    $('.in_order').eq(0).show();
    $('.in_order').click(function(){
        var clickNum = $('.in_order').index($(this));
        $(this).fadeOut();
        $('.in_order').eq(clickNum).next().fadeIn();

        if(clickNum == 3){
            $(this).fadeOut();
            $('.in_order').eq(0).fadeIn();
        }

    });


    //news 마우스 효과 스크롤에따른 fadein,out
    $('.btn_down').click(function(){
        $('.swiper-slide4 .rolling_area').animate({
            scrollTop:1500
        }, 800);
        
    });
    $('.btn_up').click(function(){
        $('.swiper-slide4 .rolling_area').animate({
            scrollTop:0
        }, 800);
        
    });

    $('.swiper-slide4 .rolling_area').scroll(function() {
        if ($('.swiper-slide4 .rolling_area').scrollTop() == 0) {
            //$('.btn_up').fadeOut();
            //$('.btn_down').fadeIn();
        }else{
            //$('.btn_up').fadeIn();
            //$('.btn_down').fadeOut();
        }
    });




});




//index.js
$(document).ready(function() {

    
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
        scrollingSpeed: 1200,
        easing: 'linear',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: false,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: false,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){
            if(index == 2 && direction == 'up'){// 1번페이지 일때
                $('#quick_btn_area').fadeOut('fast');
                $('#quick_box').fadeOut('fast');
                $('#header').addClass('h_wh');
                $('#header').removeClass('h_op');
                $('#header .gnb').mouseleave(function(){
                    $('#header').addClass('h_wh');
                    $('#header').removeClass('h_op');
                });


            }else if(index == 1 && direction == 'down'){// 2번페이지 이후
                $('#quick_btn_area').fadeIn('fast');
                $('#quick_box').fadeIn('fast');
                $('#header').removeClass('h_wh');
                $('#header').addClass('h_op');
                $('#header .gnb').mouseleave(function(){
                    $('#header').removeClass('h_wh');
                    $('#header').addClass('h_op');
                });
            }
        },
		afterLoad: function(anchorLink, index){
            if(index == 4){
                swipeH.autoplay.stop();
                swipeH2.autoplay.start();
            }else if(index == 2 ){
                swipeH.autoplay.start();
                swipeH2.autoplay.stop();
            }else{
                swipeH.autoplay.stop();
                swipeH2.autoplay.stop();
            }
        },
		afterRender: function(){},
    });
    
    
    //gnb 오버효과 
    $('#header .gnb').mouseenter(function(){
        $('.snb_area').stop().slideDown();
        $('#gn_bg').stop().fadeIn();
        $('#header').addClass('h_wh');
        $('#header').removeClass('h_op');
    });
    $('#header .gnb').mouseleave(function(){
        $('.snb_area').stop().slideUp();
        $('#gn_bg').stop().fadeOut();
    });

    
    

    //Section1 swiper 
    var swiperF = new Swiper('.swiper-container_f', {
        spaceBetween: 0,
        direction: 'horizontal',
        effect: 'slide',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        speed: 1300,
        autoplay: {
            delay: 10000,
        },
        loop: true,
        width: 1920,

    });


    swiperF.on('slideChangeTransitionEnd', function(){
        var vid = $("video").get(0);//변수 vid에 video 태그 저장 

        if(swiperF.activeIndex == 1){
            vid.play();
        }else{
            vid.pause();
        }

    });
    



    //Section2
    var swipeH = new Swiper('.swiper-container_h', {
        spaceBetween: 6,
        effect: 'horizontal',
        //width: 340,
        //slidesPerView: 'auto',
        pagination: false,
        speed: 1000,
        autoplay: false,
        loop: true,
        slidesPerView: 5,
        //loopAdditionalSlides : 20,
        navigation: {
            nextEl: '.swiper-container_h .swiper-next',
            prevEl: '.swiper-container_h .swiper-prev',
        },
        pagination: {
            el: '.swiper-pagination_h',
            type: 'progressbar',
        },
        slideToClickedSlide: true,

    });

    //Play, Stop버튼     
    $('.swiper_control .swiper-pause').click(function(){
        $(this).hide();
        $('.swiper_control .swiper-play').css('display','inline-block');
        swipeH.autoplay.stop();
    });
    $('.swiper_control .swiper-play').click(function(){
        $(this).hide();
        $('.swiper_control .swiper-pause').css('display','inline-block');
        swipeH.autoplay.start();
    });


    //Section4
    var swipeH2 = new Swiper('.swiper-container_h2', {
        spaceBetween: 0,
        effect: 'horizontal',
        width: 340,
        //slidesPerView: 'auto',
        pagination: false,
        speed: 1000,
        autoplay: false,
        loop: true,
        loopAdditionalSlides : 100,
        navigation: {
            nextEl: '.swiper-container_h2 .swiper-next',
            prevEl: '.swiper-container_h2 .swiper-prev',
        },

    });


    //윈도우 사이즈별 높이값 조절
    var win_W = $(window).width();
    var win_H = $(window).height();
    var img_H = 1080-win_H;
    var mt_up = img_H/2;

    $('.swiper-container_f .main_banner').css('width',win_W+('px'));

    $('.swiper-container_f').css('height',win_H+('px'));
    $('.swiper-container_f .swiper-slide>img').css('width',win_W+('px'));
    $('.swiper-container_f .swiper-pagination').css('width',win_W+('px'));

    if(win_H <= 1080) {
        //$('.swiper-slide>img').css('margin-top',('-')+mt_up+('px'));

        $('.pp-tableCell > img').css('margin-top',('-')+mt_up+('px'));
    }

    $('.swiper_control2').css('width',win_W+('px'));

    $('.section2 .title').css('width',win_W+('px'));


    //검색 효과
    $('#header .right_top').click(function(){
        $('#search_area').animate({right:'50%'}).css('margin-right','-378px');
        $('#gn_bg').fadeIn().css('z-index','106');
    });
    $('#search_area').click(function(){
        $('#search_area').animate({right:'-756px'});
        $('#gn_bg').fadeOut().css('z-index','99');
    });


    $('.quick_btn').click(function(){
        $('#quick_btn_area').animate({right:'402px'});
        $('#quick_box').animate({right:'0'});
    });
    $('#quick_box').click(function(){
        $('#quick_btn_area').animate({right:'0'});
        $('#quick_box').animate({right:'-402px'});
    });


    $('.section1 .main_banner a').mouseenter(function(){
        $(this).animate({height:'355px'});
        $('.section1 .main_banner').animate({height:'270px'});
        $(this).children('.no-over').hide();
        $(this).children('.over').show();
    });

    $('.section1 .main_banner a').mouseleave(function(){
        $(this).animate({height:'140px'});
        $('.section1 .main_banner').animate({height:'140px'});
        $(this).children('.no-over').show();
        $(this).children('.over').hide();
    });



});



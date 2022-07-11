
//index.js
$(document).ready(function(){
    //Horizen Swiper
    var mySwiperH = new Swiper('.swiper-container-h', {
        effect : 'slide',
        slidesPerView: 1,
        speed: 600,
        centeredSlides: true, 
        mousewheel: false,  
        grabCursor: false,
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
        pagination: false,
        loop : true,
        allowTouchMove: false,
    });


    //스크롤페이지 자동 높이계산
    var win_H = $(window).height();
    
    $('.scroll_area').css('height',win_H+'px');


    //문의하기 페이지 클릭시 반응
    $('.inquiry_box').click(function(){
        var clickNum = $('.inquiry_box').index($(this));

        $('.inquiry_box').fadeOut('');
        $('#btn_menu').fadeOut('');
        $('.btn_prev').fadeIn();
        $('.inquiry_box').removeClass('on');
        $(this).next().addClass('on');

        if(clickNum==1){
            $('.inquiry_box').eq(clickNum).next().fadeIn();
            $('#header').fadeOut();
            $('.chat_box').animate({bottom:0},700);
        }else if(clickNum==3){
            $('.inquiry_box').eq(0).fadeIn();
            $('#btn_menu').fadeIn('');
            $('.btn_prev').fadeOut('');
            $('#icon_pointer').fadeIn();
        }else{
            $('.inquiry_box').eq(clickNum).next().fadeIn();
            $('#header').fadeIn();
            $('.chat_box').animate({bottom:'-100%'},200);
        }

        if(clickNum==0){
            $('#icon_pointer').fadeOut();
        }
        
    });


    //문의하기 - 뒤로가기버튼 눌렀을때 반응
    $('.btn_prev').click(function(){
        $('.inquiry_box').fadeOut();
        $('.inquiry_box.on').prev('.inquiry_box').fadeIn().addClass('on');
        $('.inquiry_box.on').next().removeClass('on');
        $('#header').fadeIn();

        var Box3 = $('.inquiry_box3').hasClass('on');
        var Box1 = $('.inquiry_box1').hasClass('on');

        if(Box3){
            $('.chat_box').animate({bottom:0},700);
            $('#header').fadeOut();
        }else if(Box1){
            $('#btn_menu').fadeIn('');
            $('.btn_prev').fadeOut('');
            $('#icon_pointer').fadeIn();
        }else{
            $('.chat_box').animate({bottom:'-100%'},200);
            $('#header').fadeIn();
        }       

    });

    

    
    //첫번째,세번째화면 로드시 리셋
    mySwiperH.on('slideChangeTransitionStart', function () {
        if(mySwiperH.activeIndex == 1){
            $('.inquiry_box').hide();
            $('.inquiry_box1').show();
            $('.btn_prev').hide();
            $('#btn_menu').show();
        }
        if(mySwiperH.activeIndex == 0){
            $('.btn_prev').hide();
            $('#btn_menu').show();
            $('#header').fadeIn();
        }
        if(mySwiperH.activeIndex == 2){
            $('.btn_prev').hide();
            $('#btn_menu').show();
            $('#header').fadeIn();
        }
        
    });


    //GNB
    $('#btn_menu').click(function(){
        $('#gnb_area').animate({left:0});
        $('#gn_bg').fadeIn();
        $('html').addClass('hidden');
        $('body').addClass('hidden');
    });

    $('#gn_bg').click(function(){
        $('#gnb_area').animate({left:'-350px'});
        $('#gn_bg').fadeOut();
        $('html').removeClass('hidden');
        $('body').removeClass('hidden');
    });

    $('#gnb_area .deps1').click(function(){
        $('#gnb_area .deps1').removeClass('effect2');
        $(this).addClass('effect1');

    });
    $('#gnb_area .deps2').click(function(){
        $('#gnb_area .deps1').addClass('effect2');
    });


    //GNB 가로값
    var gnb_W = $('#gnb_area').width()*2;

    $('#gnb_area .deps_box').css('width',gnb_W+'px');

});



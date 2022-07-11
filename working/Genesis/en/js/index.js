
//index.js
$(document).ready(function(){
    //logo
    $('#logo').click(function(){
        $('html').animate({scrollTop: 0}, 1000);
    });

    //PC GNB    
    const mainVideo_top = $('.mainVideo').offset().top;
    const mainBenefit_top = $('.mainBenefit').offset().top;
    const mainRoadmap_top = $('.mainRoadmap').offset().top;
    const mainGuide_top = $('.mainGuide').offset().top;
    const mainFaq_top = $('.mainFaq').offset().top;

    $('#gnb--container ul .towLines').click(function(){            
        $('html').animate({scrollTop: mainVideo_top}, 1000);
    });
    $('#gnb--container ul .benefit').click(function(){            
        $('html').animate({scrollTop: mainBenefit_top - 750}, 1000);
    });
    $('#gnb--container ul .roadmap').click(function(){            
        $('html').animate({scrollTop: mainRoadmap_top - 650}, 1000);
    });
    $('#gnb--container ul .guide').click(function(){            
        $('html').animate({scrollTop: mainGuide_top - 680}, 1000);
    });
    $('#gnb--container ul .faq').click(function(){            
        $('html').animate({scrollTop: mainFaq_top - 700}, 1000);
    });

    //mobile GNB
    $(document).on('click', '.btn--gnbMenu', function(){
        $('.mbGnb--container').animate({left: 0}, 700);
        $(this).addClass('on')
        $(this).removeClass('off');
        $('.btn--gnbMenu').removeClass('animate2'); 
        $('.btn--gnbMenu').addClass('animate1'); 
    });

    $(document).on('click', '.btn--gnbMenu.on', function(){
        $('.mbGnb--container').animate({left: '100%'}, 400, 'linear');
        $('.btn--gnbMenu').addClass('animate2');
        $('.btn--gnbMenu').removeClass('animate1'); 
        $('.btn--gnbMenu').removeClass('on')
        $('.btn--gnbMenu').addClass('off');
    });

    
    //Count
    const countDownTimer = function (id, date) {
    
        var _vDate = new Date(date); // 전달 받은 일자 
        var _second = 1000; 
        var _minute = _second * 60; 
        var _hour = _minute * 60; 
        var _day = _hour * 24; 
        var timer; 


        function showRemaining() { 
            var now = new Date(); 
            var distDt = _vDate - now; 
            
            if (distDt < 0) { 
                clearInterval(timer); 
                document.getElementById(id).textContent = '해당 이벤트가 종료 되었습니다!'; return; 
            } 
        
            var days = Math.floor(distDt / _day); 
            var hours = Math.floor((distDt % _day) / _hour); 
            var minutes = Math.floor((distDt % _hour) / _minute); 
            var seconds = Math.floor((distDt % _minute) / _second); 
            
            //document.getElementById(id).textContent = date.toLocaleString() + "까지 : ";
            var countD = document.getElementById(id).textContent = days; 
            var countH = document.getElementById(id).textContent = hours; 
            var countM = document.getElementById(id).textContent = minutes; 
            var countS = document.getElementById(id).textContent = seconds; 

            $('.mainCount .count_day').text(countD);
            $('.mainCount .count_hour').text(countH);
            $('.mainCount .count_minute').text(countM);
            $('.mainCount .count_second').text(countS);

            if( countD < 10 ) {
                $('.mainCount .count_day').text( '0' + countD);
            }
            if( countH < 10 ) {
                $('.mainCount .count_hour').text( '0' + countH);
            }
            if( countM < 10 ) {
                $('.mainCount .count_minute').text( '0' + countM);
            }
            if( countS < 10 ) {
                $('.mainCount .count_second').text( '0' + countS);
            }

        } 
        
        timer = setInterval(showRemaining, 1000); 
    
    } 

    var dateObj = new Date(); 

    dateObj.setDate(dateObj.getDate() + 1); 
    //countDownTimer('sample01', dateObj); // 내일까지 
    //countDownTimer('count_noSee', '05/06/2022 00:00 AM'); // 2024년 4월 1일까지, 시간을 표시하려면 01:00 AM과 같은 형식을 사용한다. 
    countDownTimer('count_noSee', '05/06/2023'); // 2024년 4월 1일까지 
    //countDownTimer('sample04', '04/01/2019'); // 2024년 4월 1일까지 


    //mainSwiper
    const swiper = new Swiper('.mainSwiper__script', {
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 1500,
        },
        slidesPerView: 4,
        spaceBetween: 22,

        // If we need pagination
        pagination: {
            el: '.mainSwiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.mainSwiper-next',
            prevEl: '.mainSwiper-prev',
        },

        //
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }

    });


    //Guide
    $('.mainGuide__carousel .btn_next').click(function(){
        $('.mainGuide__carousel ul li:first-child').removeClass('on');
        $('.mainGuide__carousel ul li:last-child').addClass('on');
        $(this).hide();
        $('.mainGuide__carousel .btn_prev').show();
    });
    $('.mainGuide__carousel .btn_prev').click(function(){
        $('.mainGuide__carousel ul li:last-child').removeClass('on');
        $('.mainGuide__carousel ul li:first-child').addClass('on');
        $(this).hide();
        $('.mainGuide__carousel .btn_next').show();
    });

    //FAQ
    $('.mainFaq ul li .Q--Area').click(function(){
        $(this).parent('li').toggleClass('on');
        $('.mainFaq ul li .A--Area').stop().slideUp();
        $(this).parent('li').children('.A--Area').stop().slideToggle();
    });

    //layer popup
    $('.btn--layerPop_application').click(function(){
        $('#layerPop--container').stop().fadeIn();
        $('.layerPop__application').stop().fadeIn();
        $('#layerPop--Bg').stop().fadeIn();
        $('body, html').addClass('hidden');
    });
    
    //layer popup : 공통 : X버튼
    $('#layerPop--container .layerPop--btnClose').click(function(){
        $('#layerPop--container').stop().fadeOut();
        $('#layerPop--Bg').stop().fadeOut();
        $('body, html').removeClass('hidden');
    });
    
    //layer popup : 사전등록신청 : 확인
    $('.layerPop__application .btn--confirm').click(function(){
        $('#layerPop--container').stop().fadeOut();
        $('.layerPop__application').stop().fadeOut();
        $('#layerPop--Bg').stop().fadeOut();
        $('body, html').removeClass('hidden');
    });

    // position: fixed 사용시 ie 떨림 현상 방지
    if( navigator.userAgent.match(/Trident\/7\./) ){
        $('body').on("mousewheel", function(){
            event.preventDefault();

            var wheelDelta = event.wheelDelta,
                currentScrollPosition = window.pageYOffset;

            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
        $('body').keydown(function(e){
            e.preventDefault();
            var currentScrollPosition = window.pageYOffset;

            switch (e.which){
                case 38: //up
                    window.scrollTo(0, currentScrollPosition - 120);
                    break;
                case 40: //down
                    window.scrollTo(0, currentScrollPosition + 120);
                    break;
                default: return;
            }
        });
    }

});



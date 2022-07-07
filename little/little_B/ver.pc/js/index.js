
/* pagepiling */
$(document).ready(function() {
    /* pagepiling : 시작 */
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#da493e', '#11a4a0', '#2b8abb', '#f58902'],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': []
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){
            //after leaving section 2
            if(index == 3 && direction =='down'){
                //alert("Going to section 4!");
                $('.icon_scroll').fadeOut();
                $('.btn_top').fadeIn();
            }else
            if(index == 4 && direction =='up'){
                //alert("Going to section 4!");
                $('.icon_scroll').fadeIn();
                $('.btn_top').fadeOut();
            }
        },
        afterLoad: function(anchorLink, index){
            if(index == 4){
                $('.icon_scroll').fadeOut();
                $('.btn_top').fadeIn();
            }else{
            }
        },

    });
    /* pagepiling : 종료 */


    var win_w = $(window).width();
    var win_h = $(window).height();
    
    /* 사용자정의 : 시작 */
    var img_width = $('#pagepiling .section .pp-tableCell .content_outline > img').width();
    var img_height = $('#pagepiling .section .pp-tableCell .content_outline > img').height();

    var li_h = $('#gnb ul li a').height();
    $('#gnb ul li a').css('line-height',li_h+'px');
    $('#gnb').hide();

    $('#header .gnb_menu').click(function(){
        $('#gnb').slideDown('fast');
        $.fn.pagepiling.setAllowScrolling(false);
        $.fn.pagepiling.moveTo('firstPage');
        $('#pp-nav ul li a').removeClass('active');
        $('#pp-nav ul li:first-child a').addClass('active');
    });
    $('#gnb .btn_close').click(function(){
        $('#gnb').slideUp('fast');
        $.fn.pagepiling.setAllowScrolling(true);
        $.fn.pagepiling.moveTo('firstPage');
        $('#pp-nav ul li a').removeClass('active');
        $('#pp-nav ul li:first-child a').addClass('active');
    });

    $('#pagepiling .section .content_outline .effect_box').mouseenter(function(){
        $(this).stop().animate({right:'0px'});
    });
    $('#pagepiling .section .content_outline .effect_box').mouseleave(function(){
        $(this).stop().animate({right:'-180px'});
    });

    $('#footer .btn_top').click(function(){
        $.fn.pagepiling.moveTo('firstPage');
    });

    $('#gnb').css('width',img_width+'px');
    $('#gnb').css('height',img_height+'px');
    $('#gnb').css('margin-left',-img_width/2+'px');
    $('#gnb').css('margin-top',-img_height/2+'px');
    $('#header').css('width',img_width+'px');
    $('#header').css('margin-left',-img_width/2+'px');
    $('.content_outline').css('width',img_width+'px');
    $('.content_outline').css('height',img_height+'px');
    $('#footer').css('width',img_width+'px');
    $('#footer').css('margin-left',-img_width/2+'px');

    
});

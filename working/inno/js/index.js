
//index.js
$(document).ready(function(){
    $('.arrangement-box').click(function(){
        $(this).children('ul').stop().toggle();
        $(this).toggleClass('on');
    });

    
    $('.group-container .group > li .item-work-bar .select-box').click(function(){
        $(this).children('ul').stop().toggle();
        $(this).toggleClass('on');
    });


    $('.bx-container').hide();
    $('.group-container .group > li .item-info-bar .right-area .bx-dots-horizontal-rounded').hover(function(){
        $(this).parent('.right-area').children('.bx-container').toggle();
        $(this).toggleClass('on');
    });


    $('.btn-menu').click(function(){
        $('#layer-bg').show();
        $('.menu-container').show();
    });
    
    $('.btn-close').click(function(){
        $('#layer-bg').hide();
        $('.menu-container').hide();
    });



});



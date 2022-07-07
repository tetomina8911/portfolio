
//index.js
$(document).ready(function(){
    //
    $('#header .btn_menu').click(function(){                        
        if($('#header').hasClass('active')){
            //alert('yes');
            $('#header').removeClass('active');
            $('#header').animate({left : '0'});
            $('#body').animate({width: '87%'});
        }else{
            //alert('no');
            $('#header').addClass('active');
            $('#header').animate({left : "-180px"});
            $('#body').animate({width: '100%'});
        }
    });
    

    
});



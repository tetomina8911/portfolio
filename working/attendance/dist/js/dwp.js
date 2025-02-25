$(document).ready(function(){
  //gnb 
  let gnb = $("#gnb");
  $("#btnMenu").click(function(){
    gnb.animate({
      left: 0
    }, 'fast')
  });

  $("#btnMenuClose").click(function(){
    gnb.animate({
      left: -250
    }, 'fast')
  });


});
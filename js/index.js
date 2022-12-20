$(document).ready(function () {
  const MainPagepiling = $(".MainPagepiling").pagepiling({
    menu: "Nav",
    anchors: ["Portfolio", "Contact"],
    direction: "vertical",
    verticalCentered: true,
    sectionsColor: [],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: "#fff",
      bulletsColor: "#fff",
      position: "right",
      tooltips: ["", ""],
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: false,

    //events
    onLeave: function (index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
    afterRender: function () {},
  });

  const swiper = new Swiper(".swiper", {
    speed: 2000,
    spaceBetween: 70,
    navigation: {
      nextEl: ".swiper--next",
      prevEl: ".swiper--prev",
    },
  });

  $(".portfolio--wrapper li").hover(
    function () {
      $(this).children(".shadow__box").stop().fadeIn();
    },
    function () {
      $(this).children(".shadow__box").stop().fadeOut();
    }
  );

  $("#layerPop--container").click(function () {
    $("#layerBg").stop().fadeOut();
    $("#layerPop--container").stop().fadeOut();
    $(".swiper").removeClass("hidden");
  });
  $("#layerBg").click(function () {
    $("#layerBg").stop().fadeOut();
    $("#layerPop--container").stop().fadeOut();
    $("#btn_x").stop().fadeOut();
    $(".swiper").removeClass("hidden");
  });
  $("#btn_x").click(function () {
    $("#layerBg").stop().fadeOut();
    $("#layerPop--container").stop().fadeOut();
    $("#btn_x").stop().fadeOut();
    $(".swiper").removeClass("hidden");
  });

  $(".btn_pop").click(function () {
    $("#layerBg").stop().fadeIn();
    $("#layerPop--container").stop().fadeIn();
    $("#btn_x").stop().fadeIn();
    $(".swiper").addClass("hidden");
  });

  $(".btn_pop01").click(function () {
    $(".layer-00").hide();
    $(".layer-01").show();
  });
  $(".btn_pop02").click(function () {
    $(".layer-00").hide();
    $(".layer-02").show();
  });
  $(".btn_pop03").click(function () {
    $(".layer-00").hide();
    $(".layer-03").show();
  });
  $(".btn_pop04").click(function () {
    $(".layer-00").hide();
    $(".layer-04").show();
  });
});

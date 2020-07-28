$(document).ready(function () {
  $(window).on("scroll load resize ", function () {
    let header = $("header");
    let simpleDevelopment = $("section.simpleDevelopment");
    let simpleDevelopmentH = simpleDevelopment.outerHeight();
    let scrollPos = $(window).scrollTop();
    let scrollW = $(this).scrollTop();
    let nav = $("nav");
    let navH = $("nav").outerHeight();
    let difference = simpleDevelopmentH - navH;
    if (nav.hasClass("active")) {
      nav.removeClass("active");
      let wrapperMen = $(".wrapper-menu");
      wrapperMen.removeClass("open");
    }

    if (scrollW > difference) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  var wrapperMenu = document.querySelector(".wrapper-menu");

  wrapperMenu.addEventListener("click", function () {
    wrapperMenu.classList.toggle("open");
    $("nav").toggleClass("active");
  });
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");

    let elementOffset = $(elementId).offset().top - 80;

    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      500
    );
  });

  let nav = $("nav");
  let sections = $(".sect");
  let header = $("header");
  let nav_height = nav.outerHeight();

  $(window).on("scroll load resize", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height - 200,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        let navFind = nav.find("a").removeClass("active");

        sections.removeClass("active");

        $(this).addClass("active");
        let navData = nav.find('a[data-scroll="#' + $(this).attr("id") + '"]');

        navData.addClass("active");
      }
    });
  });

  $(document).on("click", function (e) {
    let headHight = $("header").outerHeight(true);
    let clY = e.clientY;

    let navig = $("nav");
    let navigH = $("nav").outerHeight(true);

    let wrapMenu = $("#wrapper-menu");
    let Y = e.pageY;
    let diff = Y - navigH;
    let u = navig.hasClass("active");
    let i = wrapMenu.hasClass("open");

    let trr = e.target == wrapMenu;

    if (u == true && i == true && diff > 0 && clY > headHight) {
      wrapMenu.removeClass("open");
      navig.removeClass("active");
    }
  });
});

/*
 scroll page.
 */

$(document).ready(function () {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (event) {
        event.preventDefault();

        $("#navbarCollapse1").collapse('hide');

        var target = $(this.hash);
        $("html, body").stop();
        $("html, body").animate({ scrollTop: target.offset().top }, 1000, "easeInOutExpo");
    });
});

$(window).scroll(function () {
    var bottomHeight = document.body.scrollHeight - document.body.clientHeight;
    if (bottomHeight - $(window).scrollTop() <= 50) {
        ;
    }
});

$("body").scrollspy({ target: "#navbar", offset: 80 });

$(document).click(function () {
    $("#navbarCollapse1").collapse('hide');
});

$(window).scroll(function () {
    $("#navbarCollapse1").collapse('hide');
});
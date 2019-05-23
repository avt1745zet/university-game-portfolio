

$(document).ready(function () {
    /*
    Scroll page.
    */
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (event) {
        event.preventDefault();

        $("#navbarCollapse").collapse('hide');

        var target = $(this.getAttribute('href'));

        $("html, body").stop();
        $("html, body").animate({ scrollTop: target.offset().top }, 1000, "easeInOutExpo");
    });
    /*
    Auto hide navbar collapse.
    */
    $(document).click(function () {
        $("#navbarCollapse").collapse('hide');
    });

    $(window).scroll(function () {
        $("#navbarCollapse").collapse('hide');
    });
    /*
    Scroll spy.
    */
    $("body").scrollspy({ target: "#navbar", offset: 300 });

    //$(".level-header .text-center").css({ opacity: 0 });
    $(".level-header .text-center").animate({ top: "10px", opacity: 0 }, 'slow');

    $(window).on("activate.bs.scrollspy", function (_e, event) {
        var target = $(event.relatedTarget).siblings(".level-header");
        var targetDiv = $(target).find(".text-center");
        $(targetDiv).animate({ top: "0px", opacity: 1 }, 'slow');
    });
});
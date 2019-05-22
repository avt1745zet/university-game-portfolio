

$(document).ready(function () {
    /*
    Scroll page.
    */
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (event) {
        event.preventDefault();

        $("#navbarCollapse1").collapse('hide');

        var target = $(this.getAttribute('href'));

        $("html, body").stop();
        $("html, body").animate({ scrollTop: target.offset().top }, 1000, "easeInOutExpo");
    });
    /*
    Auto hide navbar collapse.
    */
    $(document).click(function () {
        $("#navbarCollapse1").collapse('hide');
    });

    $(window).scroll(function () {
        $("#navbarCollapse1").collapse('hide');
    });
    /*
    Scroll spy.
    */
    $("body").scrollspy({ target: "#navbar", offset: 60 });

    $(window).on("activate.bs.scrollspy", function (_e, obj) {
        console.log($(obj.relatedTarget));
        var target = $(obj.relatedTarget).find(".intro");
        target.fadeOut(3000);
    });
});
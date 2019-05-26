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
    $("body").scrollspy({ target: "#navbar", offset: 100 });

    //$(".level-header .text-center").css({ opacity: 0 });
    $(".level-header .text-center").animate({ top: "10px", opacity: 0 }, 'slow');

    $(window).scroll(function () {
        $(".level-header").each(function () {
            var target = this;
            var targetDiv = $(target).find(".text-center");
            elementHeightInWindow(this, 20, function () { show(targetDiv); });
        });

        function show(target) {
            $(target).animate({ top: "0px", opacity: 1 }, 'slow');
        }
    });
});

function elementHeightInWindow(target, percentage = 0, callback) {
    var windowHeight = document.body.clientHeight;
    var windowBottomScrollTop = $(window).scrollTop() + windowHeight;
    $(target).each(function () {
        var curPencentage = -(target.offsetTop - windowBottomScrollTop) / windowHeight * 100;
        if (curPencentage > percentage) {
            callback();
        }
    });
}
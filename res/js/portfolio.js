$(document).ready(function () {
    /*
    Scroll page.
    */
    $('a.js-scrollpage-trigger[href*="#"]:not([href="#"])').click(function (event) {
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
    $(".js-scroll-show").animate({ top: "10px", opacity: 0 }, 'slow');

    $(window).scroll(function () {
        $(".js-scroll-show").each(function () {
            var target = this;
            elementOffsetInWindow(target, 80, function () { show(target); });
        });

        function show(target) {
            $(target).animate({ top: "0px", opacity: 1 }, 'slow');
        }
    });
});

function elementHeightInWindow(target, percentage = 0, callback) {
    var windowHeight = $(window).height();
    var windowBottomScrollTop = $(window).scrollTop() + windowHeight;
    $(target).each(function () {
        var targetHeight = $(target).height();
        var targetCenter = $(target).offset().top + targetHeight / 2;
        var curPencentage = -(targetCenter - windowBottomScrollTop) / windowHeight * 100;
        if (curPencentage > percentage) {
            callback();
        }
    });
}

function elementOffsetInWindow(target, percentage = 0, callback) {
    var windowHeight = $(window).height();
    var windowCenterScrollTop = $(window).scrollTop() + windowHeight / 2;
    $(target).each(function () {
        var targetHeight = $(target).height();
        var targetCenter = $(target).offset().top + targetHeight / 2;
        var curPencentage = Math.abs(targetCenter - windowCenterScrollTop) / (windowHeight / 2) * 100;
        if (curPencentage < percentage) {
            callback();
        }
    });
}
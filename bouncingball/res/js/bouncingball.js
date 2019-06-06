$("#loading").show();

$(window).on("load", function () {
    var interval = 1000;
    var fadeDuration = 2000;
    setTimeout(function () {
        $("#loading").fadeOut(fadeDuration);
    }, interval);
});
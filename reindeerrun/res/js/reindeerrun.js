$(document).ready(function () {
    /*
     * Hide title.
     */
    $("#title").hide();
    $("#title").fadeIn(3000);
    /*
     * popup-youtube
     */
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: true
    });
    /*
     * Fade mask.
     */
    $(".popup-youtube").mouseenter(function () {
        var mask = $(this).children(".mask");
        mask.stop();
        mask.animate({ opacity: "0" }, "slow");
    });

    $(".popup-youtube").mouseleave(function () {
        var mask = $(this).children(".mask");
        mask.stop();
        mask.animate({ opacity: "1" }, "slow");
    });
}); 
$(document).ready(function () {
    /*
     * Screenshot magnificPopup.
     */
    $('.screenshot').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile mfp-with-zoom',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
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
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
}); 
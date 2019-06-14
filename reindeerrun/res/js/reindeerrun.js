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
/*
 * Text animation.
 */
$(document).ready(function () {
    $(".js-text-ani").each(function () {
        var target = $(this);
        var text = target.data("text");
        var separator = target.data("separator");
        var interval = target.data("interval");
        var aniText = text.split(separator);
        var index = 0;

        ani();

        function ani() {
            setTimeout(function () {
                target.text(aniText[index]);

                if (index === aniText.length - 1)
                    index = 0;
                else
                    index += 1;

                setTimeout(function () {
                    ani();
                }, interval);

            }, interval);
        }
    });
});
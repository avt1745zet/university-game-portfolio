$(document).ready(function () {
    /*
     * If mouse enter character-img, character-img will change img to gif.
     */
    $(".character-img").mouseenter(function () {
        var target = $(this);
        var characterName = target.data("character-name");
        var src = target.prop("src");
        var newSrc = src.slice(0, src.lastIndexOf("/") + 1);
        newSrc += characterName.toString().concat("_walk.gif");
        target.prop("src", newSrc);
    });
    $(".character-img").mouseleave(function () {
        var target = $(this);
        var characterName = target.data("character-name");
        var src = target.prop("src");
        var newSrc = src.slice(0, src.lastIndexOf("/") + 1);
        newSrc += characterName.toString().concat("_idle.png");
        target.prop("src", newSrc);
    });
    /*
     * Fate card magnificPopup.
     */
    $('.fate-card').magnificPopup({
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
     * Chance card magnificPopup.
     */
    $('.chance-card').magnificPopup({
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
});
$(document).ready(function () {
    /*ChangeBg*/
    /*
    var imagePaths = [];
        currentIndex = 1,
        interval = 7000;

    for (var i = 0; i < 3; i++) {
        imagePaths[i] = './res/img/wrapperBgs/Bg_' + (i + 1) + '.jpg';
    }
    */
    /*preloadImage*/
    /*
    var preloadImage = function (path) {
        var imgTag = document.createElement('img');
        imgTag.src = path;
    }

    for (var i = 0; i < imagePaths.length; i++)
        preloadImage(imagePaths[i]);


    function ChangeBg() {
        $("#wrapperBg").css('background-image', 'url(' + imagePaths[currentIndex] + ')');
        currentIndex = (currentIndex + 1) % imagePaths.length;

        reflash();
    }

    function reflash() {
        setTimeout(ChangeBg, interval);
    }

    setTimeout(ChangeBg, interval);
    */
    /*Hide content space and all content space content*/

    $('#contentSpace').hide();
    $('#contentSpace > div').hide();

    /*Navbar click events*/

    var currentContent = $('#content-home');
    var contentFading = false;

    $(".nav-btn").on("click", function (e) {
        e.preventDefault();

        var targetContentElement = $(this).data('target');
        var currentContentElement = '#' + currentContent.attr('id');

        if (targetContentElement != currentContentElement && !contentFading) {
            contentFading = true;

            currentContent.fadeOut(500, function () {
                contentFading = false;

                currentContent = $(targetContentElement);

                currentContent.fadeIn(1000);
            });
        }
        $('#navbarCollapse1').collapse('hide');
    })

    $('.video-content').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
})




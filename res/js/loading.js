$(window).on('load', function () {

    /*Fade loading*/

    var fadeLoading = function () {
        $('#loading').fadeOut(3000);
    }

    /*Show content space*/

    var showContentSpace = function () {
        $('#contentSpace').fadeIn(2000);
        $('#content-home').fadeIn(3000);
    }

    setTimeout(fadeLoading,1000);
    setTimeout(showContentSpace,3000);
})
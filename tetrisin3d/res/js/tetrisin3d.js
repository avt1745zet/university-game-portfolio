/*
 * Keying effect.
 */
$(document).ready(function () {
    $(".js-keying-effect").each(function () {
        var cursor = $(this).data("cursor");
        var timeInterval = $(this).data("interval");
        var originalText = $(this).text();

        clearText(this);
        keyingEffect(this, originalText, cursor, timeInterval);

        function clearText(target) {
            $(target).text("");
        }
        
        function keyingEffect(target, goalText, cursor = "", timeInterval = 100) {
            /*
             * Do things at first.
             */
            var textSpan = $(target).children(".js-inner-text");
            if (textSpan.length === 0) {
                $(target).append("<span class='js-inner-text'>" + target.innerText + "</span>");
                textSpan = $(target).children(".js-inner-text");
            }

            var cursorSpan = $(target).children(".js-cursor");
            if (cursorSpan.length === 0) {
                console.log(cursorSpan.length);
                $(target).append("<span class='js-cursor'>" + cursor + "</span>");
                cursorSpan = $(target).children(".js-cursor");
            } 
            /*
             * Do things after interval.
             */
            setTimeout(function () {
                var resultText = textSpan.text() + goalText.charAt(textSpan.text().length);
                textSpan.text(resultText);

                if (resultText === goalText === true) {
                    cursorSpan.remove();
                    $(target).text(textSpan.text());
                }
                else
                    keyingEffect(target, goalText, cursor, timeInterval);
            }, timeInterval);
        }
    });
});
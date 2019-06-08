$(document).ready(function () {
    var originalText = $(".test").text();
    var currentText = "";
    var prefix = "|";

    clear();
    keying(prefix);

    function clear() {
        $(".test").text("");
    }

    function keying(prefix = "") {
        setTimeout(function () {
            currentText = currentText + originalText.charAt(currentText.length);
            $(".test").text(currentText + prefix);

            if (currentText === originalText === false)
                keying(prefix);
            else
                $(".test").text(currentText);
        }, 250);
    }
});
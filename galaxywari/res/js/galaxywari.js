$(document).ready(function () {
    $(".js-move").each(function () {
        var target = $(this);
        var offsetX = target.data("offset-x");
        var offsetY = target.data("offset-y");
        var interval = target.data("interval");

        setTimeout(function () { move(target, offsetX, offsetY); }, interval);

        function move(target, offsetX = 0, offsetY = 0) {
            var originPos = target.position();
            target.animate({ left: originPos.left + offsetX, top: originPos.top + offsetY }, 'fast');
        }
    });
});
$(document).ready(function () {

    firstSink();

    function firstSink() {
        setTimeout(function () { sink($("#D")); }, 400);
        setTimeout(function () { sink($("#r")); }, 1000);
        setTimeout(function () { sink($("#e")); }, 600);
        setTimeout(function () { sink($("#a")); }, 200);
        setTimeout(function () { sink($("#m")); }, 800);
    }

    setTimeout(function () { keepDream(); }, 1000);

    function keepDream() {
        keep($("#D"));
        keep($("#r"));
        keep($("#e"));
        keep($("#a"));
        keep($("#m"));
        setTimeout(function () { keepDream(); }, 6000);
        console.log("1");
    }


    function sink(target) {
        target.animate({ top: "45%" }, 3000, "easeOutBack");
    }

    function keep(target) {
        target.animate({ top: "50%" }, 3000, "easeOutCubic");
        target.animate({ top: "45%" }, 3000, "easeInCubic");
    }
});
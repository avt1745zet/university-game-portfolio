$(document).ready(function () {
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
});
function counter() {
    var count = setInterval(function () {
        var c = parseInt($(".counter").text());
        $(".counter").text((++c).toString());
        if (c == 100) {
            clearInterval(count)
        }
    }, 60)
}
counter();

function counter1() {
    var count = setInterval(function () {
        var c = parseInt($(".counter1").text());
        $(".counter1").text((++c).toString());
        if (c == 500) {
            clearInterval(count)
        }
    }, 60)
}
counter1();
function counter2() {
    var count = setInterval(function () {
        var c = parseInt($(".counter2").text());
        $(".counter2").text((++c).toString());
        if (c == 500) {
            clearInterval(count)
        }
    }, 60)
}
counter2();
function counter3() {
    var count = setInterval(function () {
        var c = parseInt($(".counter3").text());
        $(".counter3").text((++c).toString());
        if (c == 65) {
            clearInterval(count)
        }
    }, 60)
}
counter3();
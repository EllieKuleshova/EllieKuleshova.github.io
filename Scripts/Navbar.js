$(document).ready(function () {
    var HeaderTop = $('header').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > HeaderTop) {
            $('header').css({ position: 'fixed', top: '0px', margin: 'auto'});
        } else {
            $('header').css({ position: 'relative', background: "#ffc808" });
        }
    });
});
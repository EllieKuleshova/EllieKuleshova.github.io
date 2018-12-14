$(".modal-window").each(function () {
    $(this).wrap('<div class="modal-overlay"></div>')
});

$(".modal-on").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).parents(".modal-overlay").addClass("modal-open");
    setTimeout(function () {
        $(modal).addClass("modal-open");
    }, 350);

    $(document).on('click', function (e) {
        var target = $(e.target);

        if ($(target).hasClass("modal-overlay")) {
            $(target).find(".modal-window").each(function () {
                $(this).removeClass("modal-open");
            });
            setTimeout(function () {
                $(target).removeClass("modal-open");
            }, 350);
        }

    });

});

$(".modal-off").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).removeClass("modal-open");
    setTimeout(function () {
        $(modal).parents(".modal-overlay").removeClass("modal-open");
    }, 350);

});

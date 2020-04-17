$(function() {
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: 1013
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(`${Math.ceil(now)}+`);
            }
        });
    });
});

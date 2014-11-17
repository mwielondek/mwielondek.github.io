$(document).ready(function() {
    $('div#main img')
        .css('top', '-30px')
        .animate({
            opacity: 1,
            top: 0
        }, {
            queue: false,
            duration: 1300,
        })
        .hover(function() {
            $(this).toggleClass('grayscale', 1000);
        });
});
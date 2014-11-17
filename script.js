$(window).load(function() {
    // initial icon animation
    $('div#main img')
        .delay(200)
        .css('top', '-30px')
        .hover(function() {
            $(this).toggleClass('grayscale');
        })
        .each(function(index) {
            $(this).delay(index*100).animate({
                opacity: 1,
                top: 0
            }, {
                queue: true,
                duration: 400,
            })
        });

    // adjust to mobile
    if (window.innerWidth < 600)
        $("#viewport").attr('content', 'width=600px');
    
    // deactivate hover:grayscale if touch device
    if ('ontouchstart' in document.documentElement) 
        $('div#main img').removeClass('grayscale');

    // spam bots, go away!     
    $('#email').click(function() {
        document.location.href = "mailto:" + generate_address();
    });
});


// "security through obscurity is not the
// hero we deserve, but the hero we need"
// - Batman
var generate_address = function() {
    var email1 = "zsolim";
    var email2 = "kednoleiw@";
    var el = [email1, email2];
    var ret = "";
    for (n = 0; n < el.length; n++) {
        str = el[n];
        for (i = str.length; i >= 0; i--) {
            ret += str.charAt(i);
        }
    }
    return ret + ".com"
}

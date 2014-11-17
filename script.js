$(document).ready(function() {
    $('div#main img')
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

    // Spam bots, go away!     
    $('#email').click(function() {
        document.location.href = "mailto:" + generate_address();
    });
});


// security through obscurity
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

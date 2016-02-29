// smooth scrolling
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});


$(document).ready(function(){
    displayRandomHeader();
});

$(document).on('ready', function(){

})


function displayRandomHeader(){
    var min = 1;
    var max = 13;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    $(".intro-header").css("background", "linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url(img/photos/80pc/splashscreen-" + random + ".jpg)");
    $(".intro-header").css("background-size", "cover");
    $(".intro-header").css("background-repeat", "no-repeat");
    $(".intro-header").css("background-position", "center");
}

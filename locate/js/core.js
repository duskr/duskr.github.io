var headerImage = null;

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

/*
$(document).ready(function(){
    console.log("ready!");
    //loadRandomHeader();
});

$(document).load(function(){
    console.log("loaded!");
    //displayRandomHeader();
});
*/

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    loadRandomHeader();

    if(window.location.hash && window.location.hash == "#thankyou") {
        $("#thankYouMessage").removeClass("hidden");
        window.location.href = "#contact";
    }
});


$(window).load(function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    displayRandomHeader();
});


function loadRandomHeader(){
    var min = 1;
    var max = 13;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;

    headerImage = new Image();
    headerImage.src = "../dependencies/img/photos/80pc/splashscreen-" + random + ".jpg";

}

function displayRandomHeader(){


    $(".intro-header").css("background", "linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url(" + headerImage.src + ")");
    $(".intro-header").css("background-size", "cover");
    $(".intro-header").css("background-repeat", "no-repeat");
    $(".intro-header").css("background-position", "center");
}

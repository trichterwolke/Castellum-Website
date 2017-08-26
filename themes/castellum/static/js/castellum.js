/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;

    if (slideIndex < 1) {
        slideIndex = 5;
    }
    else if (slideIndex > 5) {
        slideIndex = 1
    }

    showSlides(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    $('header').css('background-image', 'url(../../../../hero/hero' + n + '.jpg)');
    /*
        var url = 'http://localhost:1313/hero/hero' + n + '.jpg';
        $.ajax({ 
            url : url, 
            cache: true,
            processData : false,
        }).always(function(){
            $('header').css('background-image', url);//.fadeIn();
        });  
        */
    /*
    var i;    
    var slides = document.getElementsByClassName('mySlides');
    //var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    //dots[slideIndex - 1].className += " active";

    */
}
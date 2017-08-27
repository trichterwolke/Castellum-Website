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
    /*$("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );*/

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
var slideCount = 5;

showSlide(slideIndex);

function plusSlides(n) {
    slideIndex += n;

    if (slideIndex < 1) {
        slideIndex = slideCount;
    }
    else if (slideIndex > slideCount) {
        slideIndex = 1
    }

    showSlide(slideIndex);
}


function getNextIndex(index) {
    if (index >= slideCount) {
        return 1
    }
    else {
        return slideIndex + 1;
    }
}

function showSlide(index) {
    loadImage(index);
    loadImage(getNextIndex(index));
    fadeIn(index);
}

function loadImage(index) {
    if ($('#hero-img-' + index).length == 0) {
        var url = '../../../../hero/hero' + index + '.jpg';
        var element = '<img id="hero-img-' + index + '" class="hero-img" src="' + url + '"/>';
        $('#hero-img-container').append(element);
    }
}

function fadeIn(index) {
    var oldImage = $('.hero-img.fade-in');
    $('#hero-img-' + index).addClass('fade-in');
    oldImage.removeClass('fade-in');
}
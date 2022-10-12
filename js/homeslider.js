jQuery(document).ready(function () {
    "use strict";
    jQuery("body").find('#home-slider').fadeIn();
    jQuery("#home-slider").nerveSlider({
        sliderAutoPlay: false,
        slideTransitionDelay: 5000,
        sliderWidth: "100%",
        sliderHeight: "100%",
        sliderHeightAdaptable: false,
        slidesDraggable: false,
        allowKeyboardEvents: false,
        sliderResizable: true,
        sliderKeepAspectRatio: false,
        slideTransition: "slide", // slide or fade
        slideTransitionSpeed: 1200,
        slideTransitionEasing: "easeOutQuint",
        showDots: false,
        waitForLoad: true
    });
});

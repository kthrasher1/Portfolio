(function ($) {
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1550, 'easeInOutExpo');
            event.preventDefault();
        });
    });


})(jQuery);

jQuery(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 750,
        //grab the "back to top" link
        $back_to_top = $('.back-to-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('top-is-visible'): $back_to_top.removeClass('top-is-visible top-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('top-fade-out');
        }
    });

    jQuery('.back-to-top').click(function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

});

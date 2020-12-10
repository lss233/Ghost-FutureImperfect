/**
 * Main JS file for Marta behaviours
 * @author Lss233
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {
        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

        document.onscroll = function () {
            var h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            var navbar = document.getElementById("stickybar");
            if (navbar) {
                var content = document.getElementsByTagName('main');
                if (content == undefined) {
                    content = { offsetTop: 0 }
                } else {
                    content = content[0];
                }
                if (window.pageYOffset >= content.offsetTop) {
                    navbar.classList.add("sticky")
                } else {
                    navbar.classList.remove("sticky");
                }
                var filler = document.getElementsByClassName('stickybar-filler');
                for (var i = 0; i < filler.length; i++) {
                    filler[i].style.width = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100 + '%';
                }
            }
        }

        // Stop main header from resizing when scrolling on tablets:
        var md = new MobileDetect(window.navigator.userAgent);

        if (md.tablet()) {
            var headerHeightLandscape;
            var headerHeightPortrait;

            // If orientation is landscape:
            if (screen.orientation.angle === 0 || screen.orientation.angle === 180) {
                headerHeightLandscape = $('.main-header').css('height');
                $('.main-header').css('height', headerHeightLandscape);
            }
            // If orientation is portrait:
            else {
                headerHeightPortrait = $('.main-header').css('height');
                $('.main-header').css('height', headerHeightPortrait);
            }
        }

        // Fade-in main header background image:
        $('.main-header').imagesLoaded({ background: true }, function () {
            $('.main-header-background-square').css('background-color', 'transparent');
        });

        // Show main header's title and description when background image is visible:
        $(".home-template .main-header-background-square")
            .on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", function (e) {
                $('.home-template .page-title, .home-template .page-description').css('display', 'inherit');
            });

        // When window is resized make sure title and description are visible:
        $(window).resize(function () {
            $('.home-template .page-title, .home-template .page-description').css('display', 'inherit');
        });

        // Fade-in logo when image is loaded:
        $('.blog-logo img').imagesLoaded(function () {
            $('.blog-logo img').css('display', 'inherit');
        });

        // Remove animation from menu when visible for first time:
        $('.nav-closed .menu-button').click(function () {
            $(this).css('animation', 'none');
        });

        // Show author image when image is loaded:
        $('.author-image .img').imagesLoaded({ background: true }, function () {
            $('.author-image').css('visibility', 'visible');
        });

        $.scrollUp({
            topDistance: '100',
            topSpeed: 300,
            animation: 'fade',
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '',
            activeOverlay: true,
        });
        hljs.initHighlightingOnLoad();

        $('.main-header .vertical').okshadow({
            textShadow: true,
            xMax: 5,
            yMax: 0,
            yOffset: 3,
            fuzzMin: 1,
            fuzzMax: 3,
        });
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

            allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({ scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({ scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({ scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
    var $window = $(window),
        $body = $('body'),
        $menu = $('#menu'),
        $sidebar = $('#sidebar'),
        $main = $('#main');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Menu.
    $menu
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-menu-visible'
        });

    // Search (header).
    var $search = $('#search'),
        $search_input = $search.find('input');

    $body
        .on('click', '[href="#search"]', function (event) {

            event.preventDefault();

            // Not visible?
            if (!$search.hasClass('visible')) {

                // Reset form.
                $search[0].reset();

                // Show.
                $search.addClass('visible');

                // Focus input.
                $search_input.focus();

            }

        });

    $search_input
        .on('keydown', function (event) {

            if (event.keyCode == 27)
                $search_input.blur();

        })
        .on('blur', function () {
            window.setTimeout(function () {
                $search.removeClass('visible');
            }, 100);
        });

    // Intro.
    var $intro = $('#intro');

    // Move to main on <=large, back to sidebar on >large.
    breakpoints.on('<=large', function () {
        $intro.prependTo($main);
    });

    breakpoints.on('>large', function () {
        $intro.prependTo($sidebar);
    });
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });
})(jQuery);


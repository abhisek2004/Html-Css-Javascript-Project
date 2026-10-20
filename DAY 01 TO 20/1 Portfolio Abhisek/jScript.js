
(function ($) {
    "use strict";

    $(document).ready(function () {

        // Smooth scrolling for navbar links
        $(".navbar-nav a[href*='#']").on("click", function (event) {
            const hash = this.hash;

            if (hash && $(hash).length) {
                event.preventDefault();

                $("html, body").stop().animate(
                    {
                        scrollTop: $(hash).offset().top - 30
                    },
                    800,
                    "swing"
                );

                // Update active navbar link
                $(".navbar-nav a").removeClass("active");
                $(this).addClass("active");

                // Close Bootstrap mobile navbar if open
                $(".navbar-collapse.show").collapse("hide");
            }
        });

        // Typed text animation
        const $header = $(".header h2");
        const $typedText = $(".header .typed-text");

        if (
            $header.length === 1 &&
            $typedText.length &&
            typeof Typed !== "undefined"
        ) {
            const typedStrings = $typedText.text()
                .split(",")
                .map(text => text.trim())
                .filter(Boolean);

            if (typedStrings.length) {
                new Typed(".header h2", {
                    strings: typedStrings,
                    typeSpeed: 70,
                    backSpeed: 35,
                    backDelay: 1500,
                    startDelay: 300,
                    smartBackspace: true,
                    loop: true,
                    showCursor: true,
                    cursorChar: "|"
                });
            }
        }

        // Animate skill progress bars when visible
        if ($(".skills").length && typeof $.fn.waypoint === "function") {
            $(".skills").waypoint(
                function () {
                    $(".progress .progress-bar").each(function () {
                        const value = $(this).attr("aria-valuenow");
                        const percentage = Math.min(
                            100,
                            Math.max(0, Number(value) || 0)
                        );

                        $(this).css("width", percentage + "%");
                    });

                    this.destroy();
                },
                { offset: "80%" }
            );
        }

        // Portfolio filtering with Isotope
        if (
            $(".portfolio-container").length &&
            typeof $.fn.isotope === "function"
        ) {
            const $portfolio = $(".portfolio-container").isotope({
                itemSelector: ".portfolio-item",
                layoutMode: "fitRows",
                transitionDuration: "0.4s"
            });

            $("#portfolio-flters li").on("click", function () {
                $("#portfolio-flters li")
                    .removeClass("filter-active")
                    .attr("aria-pressed", "false");

                $(this)
                    .addClass("filter-active")
                    .attr("aria-pressed", "true");

                const filter = $(this).data("filter") || "*";
                $portfolio.isotope({ filter: filter });
            });
        }

        // Review slider
        if (
            $(".review-slider").length &&
            typeof $.fn.slick === "function"
        ) {
            $(".review-slider").slick({
                autoplay: true,
                autoplaySpeed: 4000,
                dots: true,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                pauseOnHover: true,
                pauseOnFocus: true,
                accessibility: true
            });
        }

        // Back-to-top button visibility
        const $backToTop = $(".back-to-top");

        function toggleBackToTop() {
            if ($(window).scrollTop() > 300) {
                $backToTop.stop(true, true).fadeIn(200);
            } else {
                $backToTop.stop(true, true).fadeOut(200);
            }
        }

        if ($backToTop.length) {
            toggleBackToTop();

            $(window).on("scroll", toggleBackToTop);

            // Scroll to top
            $backToTop.on("click", function (event) {
                event.preventDefault();

                $("html, body").stop().animate(
                    { scrollTop: 0 },
                    700,
                    "swing"
                );
            });
        }

        // Update active navbar link while scrolling
        const $sections = $("section[id], header[id], div[id]")
            .filter(function () {
                return $(".navbar-nav a[href='#" + this.id + "']").length > 0;
            });

        if ($sections.length) {
            $(window).on("scroll", function () {
                const scrollPosition = $(window).scrollTop() + 100;
                let currentSection = "";

                $sections.each(function () {
                    if ($(this).offset().top <= scrollPosition) {
                        currentSection = this.id;
                    }
                });

                if (currentSection) {
                    $(".navbar-nav a").removeClass("active");
                    $('.navbar-nav a[href="#' + currentSection + '"]')
                        .addClass("active");
                }
            });
        }

    });

})(jQuery);

(function () {
    "use strict";

    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Auto-update copyright year
    var yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for in-page anchor links (CSS handles the offset via scroll-margin-top)
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            var hash = this.getAttribute("href");
            if (hash.length > 1) {
                var target = document.querySelector(hash);
                if (target) {
                    event.preventDefault();
                    if (prefersReducedMotion) {
                        target.scrollIntoView();
                    } else {
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                    history.pushState(null, "", hash);
                }
            }
        });
    });

    // Scroll reveal
    var revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length && "IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        revealEls.forEach(function (el) {
            el.classList.add("visible");
        });
    }

    // Active nav link highlighting
    var navLinks = document.querySelectorAll(".nav-link");
    var sections = [];
    navLinks.forEach(function (link) {
        var target = document.querySelector(link.getAttribute("href"));
        if (target) sections.push(target);
    });

    if (sections.length && "IntersectionObserver" in window) {
        var sectionObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        navLinks.forEach(function (link) {
                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") === "#" + entry.target.id
                            );
                        });
                    }
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }
})();

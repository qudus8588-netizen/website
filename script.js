/* =====================================
   AQ PERFUME - WEBSITE ANIMATIONS
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Select website elements
    const headings = document.querySelectorAll(".section-heading");

    const aboutContent = document.querySelector(".about-content");
    const aboutImage = document.querySelector(".about-image");

    const productCards = document.querySelectorAll(".product-card");

    const contactImage = document.querySelector(".contact-image");
    const contactContent = document.querySelector(".contact-content");

    const footerItems = document.querySelectorAll(
        ".aq-footer-brand, .aq-footer-links, .aq-footer-contact, .aq-footer-social"
    );


    // Add reveal animation to headings
    headings.forEach(function (item) {
        item.classList.add("reveal");
    });


    // About section animation
    if (aboutContent) {
        aboutContent.classList.add("reveal-left");
    }

    if (aboutImage) {
        aboutImage.classList.add("reveal-right");
    }


    // Product cards animation
    productCards.forEach(function (card, index) {
        card.classList.add("reveal");

        card.style.transitionDelay = (index % 3) * 0.15 + "s";
    });


    // Contact section animation
    if (contactImage) {
        contactImage.classList.add("reveal-left");
    }

    if (contactContent) {
        contactContent.classList.add("reveal-right");
    }


    // Footer animation
    footerItems.forEach(function (item, index) {
        item.classList.add("reveal");

        item.style.transitionDelay = index * 0.12 + "s";
    });


    // Scroll animation observer
    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });


    // Header shadow on scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
        } else {
            header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
        }

    });

});
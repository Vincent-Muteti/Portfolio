
/* =========================================
   VINCENT MUTETI — PORTFOLIO JAVASCRIPT
========================================= */

// 1. Automatically update the copyright year
const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}


// 2. Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    // Show or hide the button depending on scroll position
    const handleScroll = () => {
        if (window.scrollY > 250) {
            scrollTopBtn.style.display = "flex";
            scrollTopBtn.style.alignItems = "center";
            scrollTopBtn.style.justifyContent = "center";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    // Return smoothly to the top when clicked
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Set the correct initial visibility
    handleScroll();
}


// 3. Smooth navigation for internal section links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

});

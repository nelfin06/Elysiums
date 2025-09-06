document.addEventListener('DOMContentLoaded', () => {
    // Logika untuk Menu Mobile (Hamburger Menu)
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Anda juga bisa memindahkan logika Scroll-to-Top ke sini
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    if(scrollToTopBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.classList.add("visible");
            } else {
                scrollToTopBtn.classList.remove("visible");
            }
        };
    }
});

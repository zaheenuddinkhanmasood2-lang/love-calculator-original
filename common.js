// Common navigation and mobile menu functionality for all pages

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileNavLinks = document.getElementById('navLinks');
    const menuOverlay = document.getElementById('menuOverlay');

    if (!menuToggle || !mobileNavLinks || !menuOverlay) return;

    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        mobileNavLinks.classList.toggle('right-0');
        mobileNavLinks.classList.toggle('-right-full');
        menuOverlay.classList.toggle('hidden');
        menuOverlay.classList.toggle('opacity-0');
        menuOverlay.classList.toggle('opacity-100');
        // Prevent body scroll when menu is open
        if (mobileNavLinks.classList.contains('right-0')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    // Close menu when clicking overlay (only if menu is open)
    menuOverlay.addEventListener('click', (e) => {
        if (mobileNavLinks.classList.contains('right-0')) {
            toggleMobileMenu();
        }
    });

    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking on a link
    const allNavLinks = document.querySelectorAll('#navLinks a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });

    // Close mobile menu on window resize if it becomes desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileNavLinks.classList.contains('right-0')) {
            menuToggle.classList.remove('active');
            mobileNavLinks.classList.remove('right-0');
            mobileNavLinks.classList.add('-right-full');
            menuOverlay.classList.add('hidden', 'opacity-0');
            menuOverlay.classList.remove('opacity-100');
            document.body.style.overflow = '';
        }
    });
});



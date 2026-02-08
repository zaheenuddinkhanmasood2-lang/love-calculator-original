// Share functionality
(function() {
    'use strict';

    // Get the current page URL and title
    const pageUrl = window.location.href;
    const pageTitle = document.title;
    const shareText = 'Check out this amazing Love Tester AI! Test your love compatibility now! 💕';

    // Open share overlay
    function openShareModal() {
        const overlay = document.getElementById('shareOverlay');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close share overlay
    function closeShareModal() {
        const overlay = document.getElementById('shareOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Copy link to clipboard
    function copyLink() {
        const input = document.getElementById('copyLinkInput');
        input.select();
        input.setSelectionRange(0, 99999); // For mobile devices

        navigator.clipboard.writeText(pageUrl).then(() => {
            const copyBtn = document.getElementById('copyLinkBtn');
            const originalText = copyBtn.textContent;
            
            // Visual feedback
            copyBtn.textContent = '✓ Copied!';
            copyBtn.classList.add('copied');
            
            // Show toast notification if available
            if (typeof showToast === 'function') {
                showToast('Link copied to clipboard! 🎉');
            }

            // Reset button after 2 seconds
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            // Fallback for older browsers
            document.execCommand('copy');
            if (typeof showToast === 'function') {
                showToast('Link copied! 🎉');
            }
        });
    }

    // Share via different platforms
    function shareVia(platform) {
        const encodedUrl = encodeURIComponent(pageUrl);
        const encodedTitle = encodeURIComponent(pageTitle);
        const encodedText = encodeURIComponent(shareText);
        
        let shareUrl = '';

        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case 'email':
                shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedText}%20${encodedUrl}`;
                window.location.href = shareUrl;
                return;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }

    // Initialize when DOM is ready
    function init() {
        // Share button click
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', openShareModal);
        }

        // Close button click
        const closeBtn = document.getElementById('shareCloseBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeShareModal);
        }

        // Overlay click (close when clicking outside the card)
        const overlay = document.getElementById('shareOverlay');
        if (overlay) {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    closeShareModal();
                }
            });
        }

        // Copy link button
        const copyBtn = document.getElementById('copyLinkBtn');
        if (copyBtn) {
            copyBtn.addEventListener('click', copyLink);
        }

        // Set the URL in the input field
        const linkInput = document.getElementById('copyLinkInput');
        if (linkInput) {
            linkInput.value = pageUrl;
        }

        // Platform share buttons
        const shareOptions = document.querySelectorAll('.share-option[data-platform]');
        shareOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = option.getAttribute('data-platform');
                shareVia(platform);
            });
        });

        // Keyboard shortcut: Escape to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeShareModal();
            }
        });
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

// MyDailyTally Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // App Store link handling
    const appStoreLinks = document.querySelectorAll('#app-store-link, #footer-app-store-link, #get-premium-link');
    const appStoreUrl = 'https://apps.apple.com/us/app/mydailytally-habit-tracker/id6761585975';
    
    appStoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(appStoreUrl, '_blank');
        });
    });

    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Screenshot carousel interaction (optional enhancement)
    const screenshots = document.querySelectorAll('.screenshot-item');
    screenshots.forEach((screenshot, index) => {
        screenshot.addEventListener('click', function() {
            // Could add lightbox functionality here
            console.log(`Clicked screenshot ${index + 1}`);
        });
    });

    // Pricing card interactions
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Simple analytics (privacy-friendly, no personal data)
    function trackEvent(eventName) {
        // This would be replaced with privacy-friendly analytics
        console.log('Event:', eventName);
    }

    // Track key interactions
    const heroBtn = document.querySelector('.hero .btn-primary');
    if (heroBtn) {
        heroBtn.addEventListener('click', () => trackEvent('hero_cta_click'));
    }

    const pricingBtn = document.querySelector('.pricing .btn-primary');
    if (pricingBtn) {
        pricingBtn.addEventListener('click', () => trackEvent('pricing_cta_click'));
    }
});

// Utility functions
function isMobile() {
    return window.innerWidth <= 768;
}

function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// Show iOS-specific messaging if appropriate
if (isIOS()) {
    document.body.classList.add('ios-device');
}

// Handle dynamic App Store URL based on device
function getAppStoreUrl() {
    return 'https://apps.apple.com/us/app/mydailytally-habit-tracker/id6761585975';
}

// Simple feature detection and progressive enhancement
if ('serviceWorker' in navigator) {
    // Could add service worker for offline functionality
    console.log('Service Worker supported');
}

// Lazy loading for images (modern browsers)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
} else {
    // Fallback for older browsers
    console.log('Native lazy loading not supported');
}
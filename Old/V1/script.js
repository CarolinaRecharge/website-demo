// ============================================
// CAROLINA RECHARGE - MAIN JAVASCRIPT
// ============================================

// Wait for config to load, then initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Load configuration if available
    if (window.SITE_CONFIG) {
        applyConfiguration();
    }
    
    // Check if user is returning from form submission
    handleThankYouRedirect();
    
    // Initialize all interactive features
    initializeSmoothScrolling();
    initializeCalculator();
    initializeScrollAnimations();
}

// ============================================
// CONFIGURATION APPLICATION
// ============================================
function applyConfiguration() {
    const config = window.SITE_CONFIG;
    
    // Update contact information in footer
    const footerEmail = document.querySelector('.footer-section p');
    if (footerEmail && footerEmail.textContent.includes('Email:')) {
        footerEmail.textContent = `Email: ${config.contact.email}`;
    }
    
    const footerPhone = document.querySelectorAll('.footer-section p')[1];
    if (footerPhone && footerPhone.textContent.includes('Phone:')) {
        footerPhone.textContent = `Phone: ${config.contact.phone}`;
    }
    
    // Update company name in logo
    const logoText = document.querySelector('.logo');
    if (logoText) {
        const svg = logoText.querySelector('svg');
        logoText.textContent = config.contact.companyName;
        if (svg) logoText.prepend(svg);
    }
    
    // Update form action
    const form = document.getElementById('lead-form');
    if (form && config.formspree.formUrl) {
        form.action = config.formspree.formUrl;
        
        // Update redirect URL
        const redirectInput = form.querySelector('input[name="_next"]');
        if (redirectInput && config.formspree.websiteUrl) {
            redirectInput.value = `${config.formspree.websiteUrl}/#thankyou`;
        }
    }
    
    // Update trust bar stats
    updateTrustStats(config.stats);
    
    // Update hero content
    updateHeroContent(config.hero);
}

function updateTrustStats(stats) {
    const trustItems = document.querySelectorAll('.trust-item');
    const statsArray = [
        { strong: stats.chargingStations, span: stats.chargingStationsLabel },
        { strong: stats.certification, span: stats.certificationLabel },
        { strong: stats.incentives, span: stats.incentivesLabel },
        { strong: stats.support, span: stats.supportLabel }
    ];
    
    trustItems.forEach((item, index) => {
        if (statsArray[index]) {
            const strong = item.querySelector('strong');
            const span = item.querySelector('span');
            if (strong) strong.textContent = statsArray[index].strong;
            if (span) span.textContent = statsArray[index].span;
        }
    });
}

function updateHeroContent(hero) {
    const heroH1 = document.querySelector('.hero h1');
    const heroP = document.querySelector('.hero p');
    const primaryBtn = document.querySelector('.hero .button-primary');
    const secondaryBtn = document.querySelector('.hero .button-secondary');
    
    if (heroH1) heroH1.textContent = hero.headline;
    if (heroP) heroP.textContent = hero.subheadline;
    if (primaryBtn) primaryBtn.textContent = hero.primaryButtonText;
    if (secondaryBtn) secondaryBtn.textContent = hero.secondaryButtonText;
}

// ============================================
// THANK YOU PAGE HANDLING
// ============================================
function handleThankYouRedirect() {
    if (window.location.hash === '#thankyou') {
        const contactSection = document.getElementById('contact');
        const thankYouSection = document.getElementById('thankyou');
        
        if (contactSection) contactSection.style.display = 'none';
        if (thankYouSection) thankYouSection.style.display = 'block';
        
        window.scrollTo(0, 0);
    }
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// ============================================
// SMOOTH SCROLLING
// ============================================
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                const menu = document.getElementById('nav-menu');
                if (menu) menu.classList.remove('active');
            }
        });
    });
}

// ============================================
// FAQ ACCORDION
// ============================================
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    faqItem.classList.toggle('active');
    answer.classList.toggle('active');
}

// ============================================
// ROI CALCULATOR
// ============================================
function calculateROI() {
    const numChargers = parseInt(document.getElementById('num-chargers').value) || 0;
    const dailySessions = parseInt(document.getElementById('daily-sessions').value) || 0;
    const feePerSession = parseFloat(document.getElementById('fee-per-session').value) || 0;
    
    const monthlyRevenue = numChargers * dailySessions * feePerSession * 30;
    
    const revenueElement = document.getElementById('monthly-revenue');
    if (revenueElement) {
        revenueElement.textContent = '$' + monthlyRevenue.toLocaleString('en-US', {maximumFractionDigits: 0});
    }
}

function initializeCalculator() {
    calculateROI();
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and guide cards
    document.querySelectorAll('.service-card, .guide-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ============================================
// GOOGLE ANALYTICS (if configured)
// ============================================
function initializeAnalytics() {
    if (window.SITE_CONFIG && window.SITE_CONFIG.analytics.googleAnalyticsId) {
        const gaId = window.SITE_CONFIG.analytics.googleAnalyticsId;
        
        // Load Google Analytics
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script1);
        
        const script2 = document.createElement('script');
        script2.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
        `;
        document.head.appendChild(script2);
    }
}

// Initialize analytics if config is loaded
if (window.SITE_CONFIG) {
    initializeAnalytics();
}

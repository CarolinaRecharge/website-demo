// ============================================
// CAROLINA RECHARGE - CONFIGURATION FILE
// ============================================
// Update the values below to customize your website

const CONFIG = {
    // ==========================================
    // CONTACT INFORMATION
    // ==========================================
    contact: {
        email: "daniel.black@carolinarecharge.com",
        phone: "(919) 555-0100", // UPDATE with your real phone number
        companyName: "Carolina Recharge"
    },

    // ==========================================
    // FORMSPREE SETTINGS
    // ==========================================
    formspree: {
        formUrl: "https://formspree.io/f/xykdgnbg",
        // Your GitHub Pages URL (update after deployment)
        // Example: "https://yourusername.github.io/your-repo-name"
        websiteUrl: "https://yourusername.github.io/your-repo-name"
    },

    // ==========================================
    // TRUST BAR STATISTICS
    // ==========================================
    stats: {
        chargingStations: "100+",
        chargingStationsLabel: "Charging Stations Deployed",
        
        certification: "NC Certified",
        certificationLabel: "Licensed Consultants",
        
        incentives: "$500K+",
        incentivesLabel: "In Incentives Secured",
        
        support: "24/7",
        supportLabel: "Support Available"
    },

    // ==========================================
    // HERO SECTION
    // ==========================================
    hero: {
        headline: "Power the Future of Transportation in North Carolina",
        subheadline: "Expert EV charging infrastructure consulting for businesses, property owners, and fleet operators",
        primaryButtonText: "Schedule Free Consultation",
        secondaryButtonText: "Explore Services"
    },

    // ==========================================
    // SERVICE AREAS
    // ==========================================
    serviceAreas: {
        description: "Serving all of North Carolina including Charlotte, Raleigh, Durham, Greensboro, Winston-Salem, and surrounding areas."
    },

    // ==========================================
    // SOCIAL MEDIA & ANALYTICS
    // ==========================================
    analytics: {
        googleAnalyticsId: "", // Add your GA4 ID here (e.g., "G-XXXXXXXXXX")
    },

    socialMedia: {
        linkedin: "", // Add your LinkedIn URL
        facebook: "", // Add your Facebook URL
        twitter: ""   // Add your Twitter/X URL
    },

    // ==========================================
    // BUSINESS INFORMATION
    // ==========================================
    business: {
        tagline: "North Carolina's trusted partner for EV charging infrastructure solutions.",
        foundedYear: "2024",
        licenseNumber: "" // Add if applicable
    }
};

// DO NOT EDIT BELOW THIS LINE
// ============================================
// This makes the config available to the website
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = CONFIG;
}

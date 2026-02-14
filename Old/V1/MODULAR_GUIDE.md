# Carolina Recharge - Modular Website Guide

## 📁 New File Structure

Your website is now split into multiple files for easier management:

```
carolina-recharge-website/
├── index-modular.html    ← Main HTML file (rename to index.html when deploying)
├── config.js             ← ⭐ EDIT THIS for easy updates
├── styles.css            ← All styling
├── script.js             ← All JavaScript functionality
└── README.md             ← Deployment instructions
```

---

## ⭐ Quick Updates - Edit config.js

**This is the ONLY file you need to edit for most changes!**

### 1. Update Contact Information
```javascript
contact: {
    email: "daniel.black@carolinarecharge.com",  // ← Change email here
    phone: "(919) 555-0100",                      // ← Change phone here
    companyName: "Carolina Recharge"              // ← Change company name
}
```

### 2. Update Formspree Settings
```javascript
formspree: {
    formUrl: "https://formspree.io/f/xykdgnbg",   // ← Your Formspree URL
    websiteUrl: "https://yourusername.github.io/your-repo-name"  // ← Your GitHub Pages URL
}
```

**Important:** After deploying to GitHub, update `websiteUrl` with your actual URL!

### 3. Update Statistics
```javascript
stats: {
    chargingStations: "100+",               // ← Update these numbers
    chargingStationsLabel: "Charging Stations Deployed",
    
    certification: "NC Certified",
    certificationLabel: "Licensed Consultants",
    
    incentives: "$500K+",
    incentivesLabel: "In Incentives Secured",
    
    support: "24/7",
    supportLabel: "Support Available"
}
```

### 4. Customize Hero Section
```javascript
hero: {
    headline: "Power the Future of Transportation in North Carolina",
    subheadline: "Expert EV charging infrastructure...",
    primaryButtonText: "Schedule Free Consultation",
    secondaryButtonText: "Explore Services"
}
```

### 5. Add Google Analytics (Optional)
```javascript
analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",  // ← Add your GA4 ID here
}
```

---

## 🎨 Styling Changes - Edit styles.css

### Change Color Scheme
Find the `:root` section at the top of `styles.css`:

```css
:root {
    --primary-blue: #0066cc;      /* Main brand color */
    --secondary-blue: #0052a3;    /* Darker shade */
    --accent-green: #00cc66;      /* CTA buttons */
    --dark-gray: #2c3e50;         /* Text color */
    --light-gray: #ecf0f1;        /* Backgrounds */
}
```

Change these hex codes to match your brand colors.

---

## 📝 Content Changes - Edit index-modular.html

Only edit the HTML file when you need to:
- Add new sections
- Change service descriptions
- Update FAQ questions/answers
- Modify form fields
- Add images or new content

**The HTML is now much cleaner and easier to read!**

---

## 🚀 Deployment to GitHub Pages

### Step 1: Prepare Your Files

1. **Rename the file:**
   - Rename `index-modular.html` to `index.html`
   
2. **Update config.js:**
   - Update your GitHub Pages URL in the `formspree.websiteUrl` setting
   - Update phone number
   - Update any statistics

### Step 2: Upload to GitHub

Upload these 4 files to your GitHub repository:
- `index.html` (renamed from index-modular.html)
- `config.js`
- `styles.css`
- `script.js`

### Step 3: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Select branch: `main`
3. Select folder: `/ (root)`
4. Click Save

### Step 4: Test Your Website

After deployment:
1. Visit your GitHub Pages URL
2. Submit a test form
3. Check that config.js updates are applied
4. Test on mobile

---

## 🔄 Making Updates After Deployment

### To Update Contact Info:
1. Edit `config.js`
2. Upload to GitHub
3. Changes appear immediately (no cache issues!)

### To Update Styles:
1. Edit `styles.css`
2. Upload to GitHub
3. Users may need to refresh (Ctrl+Shift+R)

### To Update Content:
1. Edit `index.html`
2. Upload to GitHub

---

## 📋 File Responsibilities

| File | What It Controls |
|------|------------------|
| **config.js** | Contact info, Formspree URL, statistics, hero text, analytics |
| **styles.css** | All colors, fonts, spacing, layout, responsive design |
| **script.js** | Form behavior, calculator, FAQ accordion, animations |
| **index.html** | Page structure, content, service descriptions, FAQ text |

---

## 🎯 Common Tasks

### Task: Change Phone Number
**File:** `config.js`
```javascript
phone: "(919) 555-0100"  // ← Change this
```

### Task: Update Formspree URL
**File:** `config.js`
```javascript
formUrl: "https://formspree.io/f/xykdgnbg"  // ← Change this
```

### Task: Change Button Colors
**File:** `styles.css`
```css
--accent-green: #00cc66;  /* Change this hex code */
```

### Task: Add a New Service
**File:** `index.html`

Find the services section and add:
```html
<div class="service-card">
    <div class="service-icon">🚗</div>
    <h3>Your New Service</h3>
    <p>Description of your new service...</p>
</div>
```

### Task: Update Trust Statistics
**File:** `config.js`
```javascript
stats: {
    chargingStations: "200+",  // ← Update numbers
    // ... etc
}
```

---

## 🐛 Troubleshooting

### Config Changes Not Showing?
1. Clear browser cache (Ctrl+Shift+R)
2. Check browser console for JavaScript errors (F12)
3. Verify config.js uploaded correctly to GitHub

### Formspree Not Working?
1. Check `config.js` has correct form URL
2. Check `websiteUrl` is set to your GitHub Pages URL
3. Verify you've activated your Formspree account

### Styles Not Loading?
1. Check that `styles.css` is in the same folder as `index.html`
2. Check browser console for 404 errors
3. Clear browser cache

### JavaScript Not Working?
1. Check browser console (F12) for errors
2. Verify `script.js` and `config.js` uploaded correctly
3. Make sure files are in the same folder

---

## 💡 Pro Tips

### 1. Test Locally First
Before uploading to GitHub:
- Open `index.html` in your browser
- Test all links and forms
- Check console for errors (F12)

### 2. Version Control
Keep backups of your files, especially config.js with your settings

### 3. Gradual Changes
Make one change at a time when learning the system

### 4. Use Browser DevTools
Press F12 to inspect elements and test style changes live

---

## 🔧 Advanced Customization

### Add Custom Logo
**File:** `index.html`

Replace the SVG in the logo section:
```html
<div class="logo">
    <img src="logo.png" alt="Carolina Recharge" style="height: 40px;">
    Carolina Recharge
</div>
```

Then upload `logo.png` to your repository.

### Add New Form Fields
**File:** `index.html`

Add in the form section:
```html
<div class="form-group">
    <label for="company">Company Name</label>
    <input type="text" id="company" name="company">
</div>
```

### Change Font
**File:** `styles.css`

At the top of the file, change:
```css
body {
    font-family: 'Your Font', Arial, sans-serif;
}
```

---

## 📞 Support

### File-Specific Issues:
- **config.js issues:** Check JavaScript syntax, ensure quotes are closed
- **styles.css issues:** Validate CSS syntax, check color codes
- **index.html issues:** Validate HTML, check for unclosed tags

### Still Stuck?
1. Check browser console (F12) for error messages
2. Verify all files are uploaded to GitHub
3. Try in incognito mode to rule out cache issues
4. Review this guide again for missed steps

---

## ✅ Deployment Checklist

Before going live:
- [ ] Updated config.js with real contact info
- [ ] Updated Formspree URL in config.js
- [ ] Updated GitHub Pages URL in config.js
- [ ] Changed phone number from placeholder
- [ ] Tested form submission
- [ ] Checked mobile responsiveness
- [ ] Updated trust bar statistics
- [ ] Renamed index-modular.html to index.html
- [ ] All 4 files uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Tested live website
- [ ] Verified form emails arrive

---

**You're all set! The modular structure makes updates much easier. Just edit config.js for most changes! 🎉**

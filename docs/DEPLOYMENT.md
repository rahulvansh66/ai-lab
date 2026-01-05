# Portfolio Website Deployment Guide

## ✅ Completed Tasks

### 1. **Created Modern Dark-Themed Portfolio Website**
   - **index.html**: Full-featured single-page website with header, contact bar, and three tabs
   - **styles.css**: Modern dark theme with deep black background (#0a0a0a), purple/blue accents, responsive design, smooth animations
   - **script.js**: Tab switching functionality with keyboard navigation, localStorage persistence, and accessibility features

### 2. **Website Features**
   - **Header**: Your name "Rahul Vansh" with gradient effect in center
   - **Contact Bar**: Gmail (rahul.nlp.ninja@gmail.com), LinkedIn, and Instagram links with icons
   - **Three Tabs**: 
     - **Blogs**: Populated with your existing content from README.md (AdaBoost and XGBoost articles)
     - **Projects**: Empty state ready for content with same structure
     - **Research**: Empty state ready for content with same structure
   - **Responsive Design**: Works on mobile, tablet, and desktop
   - **Modern UI**: Card-based layout, hover effects, smooth transitions, custom scrollbar

### 3. **Git Configuration**
   - ✅ Set git user.name to `rahulvansh66`
   - ✅ Set git user.email to `rahul.nlp.ninja@gmail.com`

### 4. **Deployment**
   - ✅ Committed all files to git
   - ✅ Pushed to GitHub repository

---

## 🚀 Final Step: Enable GitHub Pages

To make your website live, you need to enable GitHub Pages manually:

### Option 1: Via GitHub Web Interface (Recommended)

1. Go to: https://github.com/rahulvansh66/index-for-blogs/settings/pages
2. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` and folder `/ (root)`
3. Click **Save**
4. Wait 1-2 minutes for deployment
5. Your site will be live at: **https://rahulvansh66.github.io/index-for-blogs/**

### Option 2: Via GitHub CLI

If you want to enable it via CLI, first authenticate:

```bash
gh auth login
```

Then run:

```bash
gh api repos/rahulvansh66/index-for-blogs/pages -X POST --raw-field 'source[branch]=main' --raw-field 'source[path]=/'
```

---

## 📝 How to Update Content

### Adding Blog Posts

Edit `index.html` and add new items in the Blogs section:

```html
<div class="item-card">
    <h4 class="item-title">
        <a href="YOUR_LINK_HERE" target="_blank" class="item-link">
            Your Blog Title
            <i class="fas fa-external-link-alt"></i>
        </a>
    </h4>
    <p class="item-description">Your description here</p>
</div>
```

### Adding Projects

Replace the empty state in the Projects tab with:

```html
<div class="category">
    <h3 class="category-title">Category Name</h3>
    <div class="items-grid">
        <div class="item-card">
            <h4 class="item-title">
                <a href="PROJECT_LINK" target="_blank" class="item-link">
                    Project Title
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </h4>
            <p class="item-description">Project description</p>
        </div>
    </div>
</div>
```

### Adding Research Papers

Same structure as Projects - replace the empty state in the Research tab.

### Updating Contact Information

Edit the contact links in `index.html`:

```html
<a href="mailto:your-email@gmail.com" class="contact-link" title="Email">
<a href="https://linkedin.com/in/your-profile" target="_blank" class="contact-link" title="LinkedIn">
<a href="https://instagram.com/your-profile" target="_blank" class="contact-link" title="Instagram">
```

---

## 🎨 Customization

### Changing Colors

Edit `styles.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #1a1a1a;      /* Secondary background */
    --accent-primary: #6366f1;    /* Primary accent color */
    --accent-secondary: #8b5cf6;  /* Secondary accent color */
    /* ... more variables ... */
}
```

### Changing Fonts

Replace the font-family in `styles.css` or add Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 🔧 Technical Details

- **Framework**: Vanilla HTML/CSS/JavaScript (no build step required)
- **Hosting**: GitHub Pages
- **Icons**: Font Awesome 6.4.0 (via CDN)
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px
- **Accessibility**: ARIA attributes, keyboard navigation support
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

---

## 📦 File Structure

```
index-for-blogs/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with dark theme
├── script.js           # JavaScript for tab functionality
├── README.md           # Project README
└── docs/
    └── DEPLOYMENT.md   # This file
```

---

## 🐛 Troubleshooting

### Website not showing up after enabling GitHub Pages?
- Wait 2-3 minutes for the first deployment
- Check the Actions tab for build status
- Ensure the branch is set to `main` and path to `/ (root)`

### Styles not loading?
- Check browser console for errors
- Ensure `styles.css` and `script.js` are in the same directory as `index.html`
- Clear browser cache

### Links not working?
- Ensure all external links start with `https://`
- Check that `target="_blank"` is set for external links

---

## 📞 Support

For issues or questions, contact: rahul.nlp.ninja@gmail.com

---

**Last Updated**: January 5, 2026


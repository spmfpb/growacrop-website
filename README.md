# GrowACrop Website

Simple hydroponics blog for growacrop.com.au — built with plain HTML, CSS and JavaScript. No frameworks, no build tools. Just open the files and edit.

---

## File Structure

```
growacrop/
├── index.html                          ← Homepage
├── blog.html                           ← Blog listing / Learning Hub
├── style.css                           ← All styles (edit colours/fonts here)
├── articles/
│   ├── TEMPLATE-copy-this-for-new-articles.html   ← Copy this for every new post
│   ├── what-is-hydroponics.html        ← First article (live)
│   └── (add more articles here)
└── README.md                           ← This file
```

---

## How to Add a New Article

1. Copy `articles/TEMPLATE-copy-this-for-new-articles.html`
2. Rename it to match your article — e.g. `articles/how-to-grow-lettuce.html`
3. Open it in VS Code and replace every `REPLACE:` comment with your content
4. Update the title, meta description, and URL in the `<head>` section
5. Write your article content in the `<div class="article-body">` section
6. Add a link to it in `blog.html` and `index.html`
7. Save, commit, push to GitHub — Vercel deploys automatically

---

## How to Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to vercel.com and click "New Project"
3. Import your GitHub repository
4. Click Deploy — no settings needed, it works automatically
5. Go to Settings → Domains and add growacrop.com.au
6. Add the DNS records Vercel gives you in GoDaddy

---

## Setting Up Email Capture

The signup forms currently use a placeholder Formspree URL. To make them work:

### Option A — Formspree (simplest, free)
1. Go to formspree.io and create a free account
2. Create a new form
3. Copy your form ID (looks like `xrgjkwqp`)
4. Replace `YOUR_FORM_ID` in all three HTML files with your actual ID
5. Submissions will go to your email — you manually add them to your email list

### Option B — Klaviyo (recommended for proper email marketing)
1. Go to klaviyo.com and create a free account
2. Create a List called "GrowACrop Subscribers"
3. Create an embedded form
4. Replace the entire `<form>` element in each HTML file with Klaviyo's embed code
5. Set up an automated welcome email that delivers the 7-day starter guide PDF

---

## Colours (edit in style.css)

```css
--green-deep:   #2a5c2a;   ← Primary brand green (nav, buttons, headings)
--green-mid:    #4a8c3a;   ← Mid green (accents, links)
--green-fresh:  #6ab84a;   ← Bright green (CTA buttons)
--green-pale:   #eef7ea;   ← Very pale green (backgrounds, tags)
--green-ghost:  #f6fbf4;   ← Near-white green (section backgrounds)
```

---

## Adding Images to Articles

Replace the placeholder `<div class="card-thumb">` with a real image:

```html
<div class="card-thumb">
  <img src="/images/your-image.jpg" alt="Description of image">
</div>
```

Create an `images/` folder in the root directory and add your photos there.

---

## SEO Checklist for Every New Article

- [ ] Unique `<title>` tag with main keyword + GrowACrop
- [ ] Unique `<meta name="description">` under 155 characters with keyword
- [ ] `<link rel="canonical">` pointing to the correct URL
- [ ] Update `og:title`, `og:description` and `og:url` for social sharing
- [ ] Add the Article schema JSON-LD (copy from what-is-hydroponics.html)
- [ ] Use your main keyword in the H1, first paragraph and at least one H2
- [ ] Add internal links to 2-3 other articles
- [ ] End with a call-to-action linking to the email signup

---

## Questions?

Ask Claude in VS Code — describe what you want to change and it'll update the code for you.

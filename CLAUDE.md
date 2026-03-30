# Provisionii — Project Brief for Claude

## Site
- Live URL: https://www.provisionii.com
- Stack: Plain HTML/CSS/JS — NO frameworks, NO npm, NO build tools
- Hosting: Vercel (auto-deploys from GitHub on push)
- Repo: https://github.com/Wealthyone78/Provisionii.git
- Local path: C:\Users\bruss\provisionii

## Files
- index.html — homepage
- intake.html — 10-step client intake form
- contact.html — contact page with form, hours, map
- vercel.json — routes /intake and /contact to their .html files

## Deployment
- Edit files locally in C:\Users\bruss\provisionii
- Use Git Bash to commit and push
- Vercel deploys automatically in ~30 seconds after push

## Business Info
- Company: Provisionii Care Services
- Phone: (309) 223-4125
- Email: care@provisionii.com
- Location: Peoria, IL
- Hours: Mon-Fri 9am-5pm, Sat-Sun by appointment

## Completed Features
- Homepage with nav, hero, services, testimonials, CTA
- Logo = home button on all pages
- Nav: Services, How It Works, Contact Us, Request Care
- 10-step intake form with phone formatting
- Contact page with form, hours, map
- Vercel routing for /intake and /contact

## Pending
- Google Maps autocomplete on intake form address field
  (needs Google Cloud API key with Places API enabled)

## How to make changes
Always use sed commands to edit files, then git add/commit/push
Example: sed -i 's|old text|new text|g' ~/provisionii/index.html

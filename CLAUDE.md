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
- CLAUDE.md — this project brief

## Deployment
- Edit files locally in C:\Users\bruss\provisionii
- Use sed commands in Git Bash to edit, then git add/commit/push
- Vercel deploys automatically in ~30 seconds after push
- NEVER replace entire files — always use sed for targeted changes

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
- Careers tab removed from nav and footer
- 10-step intake form with phone number formatting
- Google Maps autocomplete + map pin on address field in intake
- Google API key in intake.html — Maps JavaScript API + Places API enabled
- Contact page with form, hours, map, phone (309) 223-4125
- Vercel routing for /intake and /contact
- Request Care button links to /intake
- Speak With Our Team button links to /contact
- Start Your Care Plan button in services section

## Pending
- AI text assistant on open text fields (spell check + Claude rephrase)
  - Misspelled words underlined in red
  - "Clean up my message" button rewrites using Claude API
  - Applies to: intake Step 9 (Anything Else) and contact page message field

## How to make changes
Always use sed commands, never replace full files
Example: sed -i 's|old text|new text|g' ~/provisionii/filename.html
Then: git add filename.html && git commit -m "description" && git push

## Start of session reminder
Say: "Please read my project brief at https://raw.githubusercontent.com/Wealthyone78/Provisionii/main/CLAUDE.md before we start"

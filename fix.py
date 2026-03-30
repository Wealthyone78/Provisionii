import re

# Fix index.html
with open('index.html', 'r') as f:
    html = f.read()

html = html.replace(
    '<div class="logo-wrap">',
    '<a href="/" class="logo-wrap" style="text-decoration:none;">'
).replace(
    '<a href="/careers">Careers</a>',
    '<a href="/contact">Contact Us</a>'
).replace(
    '<div class="footer-logo-wrap">',
    '<a href="/" class="footer-logo-wrap" style="text-decoration:none;">'
)

with open('index.html', 'w') as f:
    f.write(html)

print("index.html fixed")

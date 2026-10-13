/* ============================================================
   Shared layout for the "easy" site.
   Ye file header, menu, footer aur page wrapper banati hai
   taake har page ek jaisa lage aur code repeat na ho.
   (Sirf build ke waqt use hoti hai - website isse load nahi karti.)
   ============================================================ */

// ---- Logo image used in header + footer ----
const LOGO = "../images/logo.png";

// ---- Top navigation structure ----
const NAV = [
    { label: "Home", href: "index.html", key: "home" },
    {
        label: "Pages", key: "pages",
        children: [
            { label: "About - Style I", href: "about-style-i.html" },
            { label: "About - Style II", href: "about-style-ii.html" },
            { label: "Gallery", href: "gallery.html" },
            { label: "Maintenance Mode", href: "maintenance-mode.html" },
            { label: "Page 404", href: "page-404.html" },
        ],
    },
    {
        label: "Services", key: "services",
        children: [
            { label: "Services - Style I", href: "services-style-i.html" },
            { label: "Services - Style II", href: "services-style-ii.html" },
            { label: "Single Service - Left Sidebar", href: "single-service-left-sidebar.html" },
            { label: "Single Service - Right Sidebar", href: "single-service-right-sidebar.html" },
        ],
    },
    { label: "Booking", href: "book-your-wash-i.html", key: "booking" },
    {
        label: "Blog", key: "blog",
        children: [
            { label: "Large Image - Right Sidebar", href: "blog-large-image-right-sidebar.html" },
            { label: "Large Image - Left Sidebar", href: "blog-large-image-left-sidebar.html" },
            { label: "Small Image - Right Sidebar", href: "blog-small-image-right-sidebar.html" },
            { label: "Small Image - Left Sidebar", href: "blog-small-image-left-sidebar.html" },
            { label: "Post - Right Sidebar", href: "how-to-choose-a-car-detailing-company.html" },
            { label: "Post - Left Sidebar", href: "interior-car-wash-and-detailing-service.html" },
        ],
    },
    {
        label: "Shop", key: "shop",
        children: [
            { label: "Shop", href: "shop.html" },
            { label: "Cart", href: "cart.html" },
        ],
    },
    {
        label: "Shortcodes", key: "shortcodes",
        children: [
            { label: "Accordion", href: "accordion.html" },
            { label: "Blockquote", href: "blockquote.html" },
            { label: "Button", href: "button.html" },
            { label: "Call to action", href: "call-to-action.html" },
            { label: "Counter boxes", href: "counter-boxes.html" },
            { label: "Divider", href: "divider.html" },
            { label: "Feature", href: "feature.html" },
            { label: "Google Maps", href: "google-maps.html" },
            { label: "Header & subheader", href: "header-subheader.html" },
            { label: "Italic text", href: "italic-text.html" },
            { label: "Masonry gallery", href: "masonry-gallery.html" },
            { label: "Notice", href: "notice.html" },
            { label: "Preformatted text", href: "preformatted-text.html" },
            { label: "Process list", href: "process-list.html" },
            { label: "Progress bars", href: "progress-bars.html" },
            { label: "Recent posts", href: "recent-posts.html" },
            { label: "Simple table", href: "simple-table.html" },
            { label: "Social profiles list", href: "social-profiles-list.html" },
            { label: "Tabs", href: "tabs.html" },
            { label: "Team member", href: "team-member.html" },
            { label: "Testimonials list", href: "testimonials-list.html" },
        ],
    },
    {
        label: "Contact", key: "contact",
        children: [
            { label: "Contact - Style I", href: "contact-style-i.html" },
            { label: "Contact - Style II", href: "contact-style-ii.html" },
            { label: "Contact - Style III", href: "contact-style-iii.html" },
        ],
    },
];

/* Build the <nav> HTML, marking the current page's menu as active */
function renderNav(activeKey) {
    let items = "";
    for (const item of NAV) {
        const isActive = item.key === activeKey ? " class=\"active\"" : "";
        if (item.children) {
            let sub = "";
            for (const child of item.children) {
                sub += `                    <li><a href="${child.href}">${child.label}</a></li>\n`;
            }
            items += `            <li${isActive}>
                <a href="#">${item.label}</a>
                <ul>
${sub}                </ul>
            </li>\n`;
        } else {
            items += `            <li${isActive}><a href="${item.href}">${item.label}</a></li>\n`;
        }
    }
    return `        <nav class="nav">
            <ul>
${items}            </ul>
        </nav>`;
}

/* Top bar + header */
function renderHeader(activeKey) {
    return `    <!-- ===== TOP BAR ===== -->
    <div class="topbar">
        <div class="container">
            <span>Auto Spa Hand Car Wash - Portland, OR</span>
            <span class="topbar-social">
                <a href="mailto:office@autospa.com">office@autospa.com</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </span>
        </div>
    </div>

    <!-- ===== HEADER + MENU ===== -->
    <header class="header">
        <div class="container">
            <a class="logo" href="index.html">
                <img src="${LOGO}" alt="Auto Spa">
            </a>
            <button class="nav-toggle" aria-label="Open menu">&#9776;</button>
${renderNav(activeKey)}
        </div>
    </header>`;
}

/* Footer (4 columns + copyright) */
function renderFooter() {
    return `    <!-- ===== FOOTER ===== -->
    <footer class="footer">
        <div class="container">
            <div class="grid grid--4">
                <div>
                    <h4>About</h4>
                    <p>Autospa Hand Wash is an eco-friendly hand car wash and detailing service based in Portland.</p>
                </div>
                <div>
                    <h4>Services</h4>
                    <ul>
                        <li><a href="services-style-i.html">Exterior Hand Wash</a></li>
                        <li><a href="services-style-i.html">Towel Hand Dry</a></li>
                        <li><a href="services-style-i.html">Tire Dressing</a></li>
                        <li><a href="services-style-i.html">Wheel Shine</a></li>
                        <li><a href="services-style-i.html">Interior Vacuum</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="about-style-i.html">About Us</a></li>
                        <li><a href="blog-large-image-right-sidebar.html">Blog</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="services-style-i.html">Our Services</a></li>
                        <li><a href="book-your-wash-i.html">Book Your Wash</a></li>
                    </ul>
                </div>
                <div class="newsletter">
                    <h4>Newsletter</h4>
                    <form action="#">
                        <input type="email" placeholder="Email address" required>
                        <button class="btn" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="copyright">
                &copy; 2026 Auto Spa. All rights reserved.
            </div>
        </div>
    </footer>`;
}

/* Full HTML page wrapper */
function layout({ title, active = "", banner = true, body = "" }) {
    const bannerHtml = banner
        ? `
    <!-- ===== PAGE BANNER ===== -->
    <section class="page-banner">
        <div class="container">
            <h1>${title}</h1>
            <div class="breadcrumb"><a href="index.html">Home</a> / ${title}</div>
        </div>
    </section>
`
        : "";

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title} - Auto Spa</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

${renderHeader(active)}

${bannerHtml}
${body}

${renderFooter()}

    <script src="js/main.js"></script>
</body>
</html>
`;
}

module.exports = { layout };

/* ============================================================
   Blog pages: 4 list styles + 5 single posts
   ============================================================ */

const PAGES = [];

// ---- shared sidebar ----
const sidebar = `
            <aside class="sidebar">
                <div class="widget">
                    <h4>Recent Posts</h4>
                    <ul>
                        <li><a href="how-to-choose-a-car-detailing-company.html">How To Choose a Car Detailing Company</a></li>
                        <li><a href="interior-car-wash-and-detailing-service.html">Interior Car Wash And Detailing Service</a></li>
                        <li><a href="how-to-book-a-car-wash-online.html">How To Book A Car Wash Online</a></li>
                    </ul>
                </div>
                <div class="widget">
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="#">Car Care</a></li>
                        <li><a href="#">Detailing</a></li>
                        <li><a href="#">Tips &amp; Tricks</a></li>
                    </ul>
                </div>
                <div class="widget">
                    <h4>Newsletter</h4>
                    <p>Get our latest offers in your inbox.</p>
                    <form action="#"><input type="email" placeholder="Email address"><button class="btn mt-20" type="submit">Subscribe</button></form>
                </div>
            </aside>`;

/* ---------- Blog listing (4 variants) ---------- */

// small = thumbnail on the side, large = full width image on top
function blogList(file, title, layoutClass, size) {
    const posts = [
        ["how-to-choose-a-car-detailing-company.html", "How To Choose a Car Detailing Company", "April 26, 2017", "image_04.jpg", "Choosing the right detailing company can save you time and money. Here are the key things to look for before you book."],
        ["interior-car-wash-and-detailing-service.html", "Interior Car Wash And Detailing Service", "April 25, 2017", "image_05.jpg", "A clean interior makes every drive more enjoyable. Learn what our interior detailing service includes."],
        ["how-to-book-a-car-wash-online.html", "How To Book A Car Wash Online", "April 24, 2017", "image_07.jpg", "Booking online takes under three minutes. Follow this simple guide to reserve your slot."],
        ["benefits-and-drawbacks-of-car-wax.html", "Benefits and Drawbacks Of Car Wax", "April 23, 2017", "image_08.jpg", "Car wax protects your paint, but it has a few downsides too. We break them down for you."],
    ];
    const items = posts.map(p =>
        size === "large"
            ? `                <article class="post mb-40">
                    <img src="../images/${p[3]}" alt="">
                    <div class="post-body">
                        <span class="date">${p[2]}</span>
                        <h3><a href="${p[0]}">${p[1]}</a></h3>
                        <p>${p[4]}</p>
                        <a href="${p[0]}" class="btn btn--outline">Read More</a>
                    </div>
                </article>`
            : `                <article class="post mb-20" style="display:grid;grid-template-columns:200px 1fr;gap:20px;">
                    <img src="../images/${p[3]}" alt="" style="height:100%;min-height:150px;">
                    <div class="post-body">
                        <span class="date">${p[4] ? p[2] : p[2]}</span>
                        <h3><a href="${p[0]}">${p[1]}</a></h3>
                        <p>${p[4]}</p>
                    </div>
                </article>`
    ).join("\n");

    return {
        file, title, active: "blog",
        body: `
    <section class="section">
        <div class="container layout-sidebar${layoutClass}">
            <div class="main">
                <h2 class="mb-40">${title}</h2>
${items}
            </div>
${sidebar}
        </div>
    </section>
`,
    };
}

PAGES.push(blogList("blog-large-image-right-sidebar.html", "Blog", "", "large"));
PAGES.push(blogList("blog-large-image-left-sidebar.html", "Blog", " layout-sidebar--left", "large"));
PAGES.push(blogList("blog-small-image-right-sidebar.html", "Blog", "", "small"));
PAGES.push(blogList("blog-small-image-left-sidebar.html", "Blog", " layout-sidebar--left", "small"));

/* ---------- Single blog posts ---------- */

function blogPost(file, title, date, image, paragraphs) {
    const body = `
    <section class="section">
        <div class="container layout-sidebar">
            <article class="main">
                <img src="../images/${image}" alt="" class="mb-20">
                <span class="date">${date}</span>
                <h2>${title}</h2>
${paragraphs.map(p => `                <p>${p}</p>`).join("\n")}
                <blockquote>Clean cars are not only beautiful, they keep their value for longer.</blockquote>
                <p>If you have any questions about this topic, feel free to contact our team.</p>
            </article>
${sidebar}
        </div>
    </section>
`;
    return { file, title, active: "blog", body };
}

PAGES.push(blogPost(
    "how-to-choose-a-car-detailing-company.html",
    "How To Choose a Car Detailing Company",
    "April 26, 2017", "image_04.jpg",
    [
        "Choosing the right detailing company can make a big difference to your car's finish and your wallet. Always check reviews and ask what products are used.",
        "A good detailing company will be transparent about pricing, use eco-friendly products, and have a trained team.",
        "Before booking, ask whether the price includes interior cleaning and waxing, as these can be charged separately.",
    ]
));

PAGES.push(blogPost(
    "interior-car-wash-and-detailing-service.html",
    "Interior Car Wash And Detailing Service",
    "April 25, 2017", "image_05.jpg",
    [
        "A clean interior makes every drive more enjoyable. Our interior detailing service removes dust, stains and odours.",
        "We vacuum all seats and carpets, wipe down the dashboard and plastics, clean the windows inside and out, and finish with an air freshener.",
        "Regular interior cleaning also protects your car's surfaces from long-term wear.",
    ]
));

PAGES.push(blogPost(
    "how-to-book-a-car-wash-online.html",
    "How To Book A Car Wash Online",
    "April 24, 2017", "image_07.jpg",
    [
        "Booking your car wash online takes under three minutes. Start by choosing the package that fits your vehicle.",
        "Next, pick a date and time that suits you and confirm your details. You will receive a confirmation by email.",
        "You can also pay securely online so there is nothing to do when you arrive.",
    ]
));

PAGES.push(blogPost(
    "benefits-and-drawbacks-of-car-wax.html",
    "Benefits and Drawbacks Of Car Wax",
    "April 23, 2017", "image_08.jpg",
    [
        "Car wax protects your paint from sun, rain and dirt, and gives your car a deep, glossy shine.",
        "The main drawback is that wax wears off over time and needs to be reapplied every few months.",
        "For the best results, combine a quality wax with regular hand washes.",
    ]
));

PAGES.push(blogPost(
    "flat-belt-conveyor-systems-explained.html",
    "Flat Belt Conveyor Systems Explained",
    "April 22, 2017", "image_09.jpg",
    [
        "Flat belt conveyor systems are used in many automatic car washes to move vehicles smoothly through the cleaning stages.",
        "They are reliable, quiet and gentle on tires compared to older chain systems.",
        "Understanding how they work helps you appreciate the speed and consistency of a modern car wash.",
    ]
));

module.exports = PAGES;

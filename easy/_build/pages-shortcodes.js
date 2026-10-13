/* ============================================================
   Shortcode demo pages (21 pages)
   Har page ek chhota component dikhata hai.
   ============================================================ */

const PAGES = [];

const wrap = (inner) => `
    <section class="section">
        <div class="container">
            ${inner}
        </div>
    </section>
`;

PAGES.push({
    file: "accordion.html", title: "Accordion", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Accordion</h2>
            <div class="accordion">
                <details open>
                    <summary>How long does a car wash take?</summary>
                    <p>A standard hand wash takes around 25 minutes. Full detailing can take up to 2 hours.</p>
                </details>
                <details>
                    <summary>Do you use eco-friendly products?</summary>
                    <p>Yes, all of our products are biodegradable and safe for the environment.</p>
                </details>
                <details>
                    <summary>Can I book online?</summary>
                    <p>Absolutely. You can book an appointment online in under 3 minutes.</p>
                </details>
            </div>`),
});

PAGES.push({
    file: "blockquote.html", title: "Blockquote", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Blockquote</h2>
            <blockquote>
                The best car wash experience I have ever had. My car looks brand new every single time!
                <footer>- David Magnus</footer>
            </blockquote>
            <p>Use a blockquote to highlight an important quote or testimonial.</p>`),
});

PAGES.push({
    file: "button.html", title: "Button", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Buttons</h2>
            <p><a href="#" class="btn">Primary Button</a></p>
            <p><a href="#" class="btn btn--yellow">Yellow Button</a></p>
            <p><a href="#" class="btn btn--outline">Outline Button</a></p>`),
});

PAGES.push({
    file: "call-to-action.html", title: "Call to action", active: "shortcodes",
    body: `
    <section class="cta">
        <div class="container">
            <h2>Ready to give your car a shine?</h2>
            <p>Book your wash today and get 10% off your first visit.</p>
            <a href="book-your-wash-i.html" class="btn btn--yellow">Book Now</a>
        </div>
    </section>
`,
});

PAGES.push({
    file: "counter-boxes.html", title: "Counter boxes", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Counter boxes</h2>
            <div class="grid grid--4">
                <div class="counter"><div class="value">1500</div><div class="label">Cars Washed</div></div>
                <div class="counter"><div class="value">24</div><div class="label">Team Members</div></div>
                <div class="counter"><div class="value">12</div><div class="label">Years</div></div>
                <div class="counter"><div class="value">98</div><div class="label">% Happy</div></div>
            </div>`),
});

PAGES.push({
    file: "divider.html", title: "Divider", active: "shortcodes",
    body: wrap(`
            <h2>Divider example</h2>
            <p>Text above the divider.</p>
            <hr style="border:none;border-top:2px solid #e3e8ee;margin:30px 0;">
            <p>Text below the divider.</p>`),
});

PAGES.push({
    file: "feature.html", title: "Feature", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-40">Feature boxes</h2>
            <div class="grid grid--3">
                <div class="card"><div class="icon">&#127793;</div><h3>Eco Friendly</h3><p>Biodegradable products.</p></div>
                <div class="card"><div class="icon">&#9889;</div><h3>Fast Service</h3><p>Wash done in 25 minutes.</p></div>
                <div class="card"><div class="icon">&#128176;</div><h3>Great Value</h3><p>Quality at a fair price.</p></div>
            </div>`),
});

PAGES.push({
    file: "google-maps.html", title: "Google Maps", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Our location</h2>
            <div style="height:340px;background:#e3e8ee;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#6b7280;">
                464 Rhode Island Av. Portland, OR 97219
            </div>`),
});

PAGES.push({
    file: "header-subheader.html", title: "Header & subheader", active: "shortcodes",
    body: wrap(`
            <h1>Main Header (H1)</h1>
            <h2>Section Header (H2)</h2>
            <h3>Sub Header (H3)</h3>
            <h4>Small Header (H4)</h4>
            <p>A short paragraph explaining the content that follows.</p>`),
});

PAGES.push({
    file: "italic-text.html", title: "Italic text", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Text styles</h2>
            <p><em>This is italic text.</em></p>
            <p><strong>This is bold text.</strong></p>
            <p><u>This is underlined text.</u></p>`),
});

PAGES.push({
    file: "masonry-gallery.html", title: "Masonry gallery", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Image gallery</h2>
            <div class="grid grid--3">
                <img src="../images/image_03.jpg" alt="" style="border-radius:8px;">
                <img src="../images/image_04.jpg" alt="" style="border-radius:8px;">
                <img src="../images/image_05.jpg" alt="" style="border-radius:8px;">
                <img src="../images/image_07.jpg" alt="" style="border-radius:8px;">
                <img src="../images/image_08.jpg" alt="" style="border-radius:8px;">
                <img src="../images/image_09.jpg" alt="" style="border-radius:8px;">
            </div>`),
});

PAGES.push({
    file: "notice.html", title: "Notice", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Notice boxes</h2>
            <div class="notice">This is a normal notice.</div>
            <div class="notice notice--success">Success! Your booking is confirmed.</div>
            <div class="notice notice--warning">Warning! Please check your details.</div>
            <div class="notice notice--danger">Error! Something went wrong.</div>`),
});

PAGES.push({
    file: "preformatted-text.html", title: "Preformatted text", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Preformatted text</h2>
            <pre style="background:#f4f7f9;padding:20px;border-radius:8px;overflow:auto;">
Car Wash Prices:
  Basic     $15.95
  Deluxe    $27.95
  Ultimate  $40.45</pre>`),
});

PAGES.push({
    file: "process-list.html", title: "Process list", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-40">Our process</h2>
            <div class="grid grid--4">
                <div class="step"><div class="num">1</div><h3>Booking</h3></div>
                <div class="step"><div class="num">2</div><h3>Inspection</h3></div>
                <div class="step"><div class="num">3</div><h3>Valuation</h3></div>
                <div class="step"><div class="num">4</div><h3>Completion</h3></div>
            </div>`),
});

PAGES.push({
    file: "progress-bars.html", title: "Progress bars", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-40">Progress bars</h2>
            <div class="progress">
                <div class="label"><span>Hand Wash</span><span>90%</span></div>
                <div class="bar"><span style="width:90%"></span></div>
            </div>
            <div class="progress">
                <div class="label"><span>Detailing</span><span>75%</span></div>
                <div class="bar"><span style="width:75%"></span></div>
            </div>
            <div class="progress">
                <div class="label"><span>Interior Clean</span><span>60%</span></div>
                <div class="bar"><span style="width:60%"></span></div>
            </div>`),
});

PAGES.push({
    file: "recent-posts.html", title: "Recent posts", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-40">Recent posts</h2>
            <div class="grid grid--3">
                <article class="post"><img src="../images/image_04.jpg" alt=""><div class="post-body"><span class="date">April 26, 2017</span><h3>How To Choose a Car Detailing Company</h3></div></article>
                <article class="post"><img src="../images/image_05.jpg" alt=""><div class="post-body"><span class="date">April 25, 2017</span><h3>Interior Car Wash And Detailing Service</h3></div></article>
                <article class="post"><img src="../images/image_07.jpg" alt=""><div class="post-body"><span class="date">April 24, 2017</span><h3>How To Book A Car Wash Online</h3></div></article>
            </div>`),
});

PAGES.push({
    file: "simple-table.html", title: "Simple table", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Price table</h2>
            <table class="table">
                <thead><tr><th>Package</th><th>Duration</th><th>Price</th></tr></thead>
                <tbody>
                    <tr><td>Basic Hand Wash</td><td>25 min</td><td>$15.95</td></tr>
                    <tr><td>Deluxe Wash</td><td>45 min</td><td>$27.95</td></tr>
                    <tr><td>Ultimate Shine</td><td>1 hour</td><td>$40.45</td></tr>
                </tbody>
            </table>`),
});

PAGES.push({
    file: "social-profiles-list.html", title: "Social profiles list", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Follow us</h2>
            <div class="social-list">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">YouTube</a>
            </div>`),
});

PAGES.push({
    file: "tabs.html", title: "Tabs", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-20">Tabs</h2>
            <div class="tabs">
                <div class="tab-buttons">
                    <button class="active" data-tab="tab-1">Exterior</button>
                    <button data-tab="tab-2">Interior</button>
                    <button data-tab="tab-3">Waxing</button>
                </div>
                <div class="tab-panel active" id="tab-1"><p>Exterior hand wash, towel dry and wheel shine.</p></div>
                <div class="tab-panel" id="tab-2"><p>Interior vacuum, dashboard clean and air freshener.</p></div>
                <div class="tab-panel" id="tab-3"><p>Sealer hand wax for long-lasting protection and shine.</p></div>
            </div>`),
});

PAGES.push({
    file: "team-member.html", title: "Team member", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-40">Our team</h2>
            <div class="grid grid--3">
                <div class="team-member"><img src="../images/team_01.png" alt=""><h4>John Carter</h4><span>Wash Manager</span></div>
                <div class="team-member"><img src="../images/team_02.png" alt=""><h4>Sarah Lee</h4><span>Detail Specialist</span></div>
                <div class="team-member"><img src="../images/team_03.png" alt=""><h4>Mike Ross</h4><span>Customer Care</span></div>
            </div>`),
});

PAGES.push({
    file: "testimonials-list.html", title: "Testimonials list", active: "shortcodes",
    body: wrap(`
            <h2 class="mb-40">What customers say</h2>
            <div class="grid grid--2">
                <div class="testimonial"><p>"Best car wash in Portland. My car always looks great!"</p><div class="name">David Magnus</div><div class="car">Nissan Titan X5</div></div>
                <div class="testimonial"><p>"Friendly staff and amazing attention to detail."</p><div class="name">Josh Williams</div><div class="car">Toyota Avensis</div></div>
            </div>`),
});

module.exports = PAGES;

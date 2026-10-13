/* ============================================================
   Main pages content for the "easy" site.
   Har object ek page hai: file (naam), title (heading), active
   (menu highlight), banner (top image chahiye ya nahi), body (HTML).
   ============================================================ */

const PAGES = [];

/* ---------------- HOME ---------------- */
PAGES.push({
    file: "index.html",
    title: "Home",
    active: "home",
    banner: false,
    body: `
    <!-- ===== HERO ===== -->
    <section class="hero">
        <div class="container">
            <p>Welcome to Autospa Hand Car Wash</p>
            <h1>Your car is always<br>in great hands with us</h1>
            <a href="book-your-wash-i.html" class="btn btn--yellow">Book Appointment</a>
        </div>
    </section>

    <!-- ===== WHO IS AUTOSPA ===== -->
    <section class="section">
        <div class="container split">
            <div>
                <span class="eyebrow" style="color:#199cdb;text-transform:uppercase;font-weight:700;letter-spacing:2px;">Who Is Autospa</span>
                <h2>Car wash &amp; detailing service</h2>
                <p>Autospa Hand Wash is an eco-friendly, hand car wash and detailing service based in Portland.
                   Our company was founded back in 2005 by a team of experts with more than 10 years of
                   professional car wash experience.</p>
                <p>Our goal is to provide our customers with the friendliest, most convenient hand car wash
                   experience possible. Our products are all biodegradable and eco-friendly.</p>
                <a href="about-style-i.html" class="btn">Read More</a>
            </div>
            <div><img src="../images/image_01.jpg" alt="Car wash"></div>
        </div>
    </section>

    <!-- ===== THE BEST CAR WASH ===== -->
    <section class="section section--light">
        <div class="container split">
            <div><img src="../images/image_02-1.jpg" alt="Detailing"></div>
            <div>
                <h2>The Best Car Wash</h2>
                <p>We offer multiple services at a great value.</p>
                <ul class="tick-list">
                    <li>Multiple car wash locations throughout Portland</li>
                    <li>Biodegradable and eco-friendly products</li>
                    <li>Pay for your wash electronically and securely</li>
                    <li>Trained and skilled car wash crew members</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- ===== BOOKING CTA ===== -->
    <section class="cta">
        <div class="container">
            <h2>No 1. Car Wash Booking System</h2>
            <p>Book an appointment online under 3 minutes.</p>
            <a href="book-your-wash-i.html" class="btn btn--yellow">Book Appointment</a>
        </div>
    </section>

    <!-- ===== OUR PROCESS ===== -->
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Our Process</span>
                <h2>We know your time is valuable</h2>
            </div>
            <div class="grid grid--4">
                <div class="step"><div class="num">1</div><h3>Booking</h3></div>
                <div class="step"><div class="num">2</div><h3>Inspection</h3></div>
                <div class="step"><div class="num">3</div><h3>Valuation</h3></div>
                <div class="step"><div class="num">4</div><h3>Completion</h3></div>
            </div>
        </div>
    </section>

    <!-- ===== WASH PACKAGES ===== -->
    <section class="section section--light">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Wash Packages</span>
                <h2>Which wash is the best for your vehicle?</h2>
            </div>
            <div class="grid grid--4">
                <div class="price-card">
                    <h3>Basic Hand Wash</h3>
                    <div class="price"><small>$</small>15<small>.95</small></div>
                    <ul class="tick-list">
                        <li>Exterior Hand Wash</li>
                        <li>Towel Hand Dry</li>
                        <li>Wheel Shine</li>
                    </ul>
                    <a href="book-your-wash-i.html" class="btn">Book Now</a>
                </div>
                <div class="price-card featured">
                    <h3>Deluxe Wash</h3>
                    <div class="price"><small>$</small>27<small>.95</small></div>
                    <ul class="tick-list">
                        <li>Exterior Hand Wash</li>
                        <li>Towel Hand Dry</li>
                        <li>Wheel Shine</li>
                        <li>Windows In &amp; Out</li>
                        <li>Sealer Hand Wax</li>
                    </ul>
                    <a href="book-your-wash-i.html" class="btn">Book Now</a>
                </div>
                <div class="price-card">
                    <h3>Ultimate Shine</h3>
                    <div class="price"><small>$</small>40<small>.45</small></div>
                    <ul class="tick-list">
                        <li>Exterior Hand Wash</li>
                        <li>Interior Vacuum</li>
                        <li>Dashboard Clean</li>
                        <li>Air Freshener</li>
                        <li>Sealer Hand Wax</li>
                    </ul>
                    <a href="book-your-wash-i.html" class="btn">Book Now</a>
                </div>
                <div class="price-card">
                    <h3>Platinum Works</h3>
                    <div class="price"><small>$</small>65<small>.95</small></div>
                    <ul class="tick-list">
                        <li>Exterior Hand Wash</li>
                        <li>Interior Vacuum</li>
                        <li>Dashboard Clean</li>
                        <li>Sealer Hand Wax</li>
                        <li>Air Freshener</li>
                    </ul>
                    <a href="book-your-wash-i.html" class="btn">Book Now</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== FEATURES ===== -->
    <section class="section">
        <div class="container">
            <div class="grid grid--4">
                <div class="card"><div class="icon">&#128663;</div><h3>Convenience</h3><p>Friendly and convenient service at multiple locations throughout Portland.</p></div>
                <div class="card"><div class="icon">&#127793;</div><h3>Organic Products</h3><p>All our products are biodegradable and eco-friendly.</p></div>
                <div class="card"><div class="icon">&#128104;</div><h3>Experienced Team</h3><p>Trained and skilled car wash crew members.</p></div>
                <div class="card"><div class="icon">&#128176;</label><h3>Great Value</h3><p>Multiple services at a great value for your money.</p></div>
            </div>
        </div>
    </section>

    <!-- ===== LATEST PROJECTS ===== -->
    <section class="section section--light">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Latest Projects</span>
                <h2>Recent work from our shop</h2>
            </div>
            <div class="grid grid--3">
                <div class="project"><img src="../images/image_03.jpg" alt=""><div class="caption"><h4>Luxury Sedan Detail</h4><span>Full Detailing</span></div></div>
                <div class="project"><img src="../images/image_04.jpg" alt=""><div class="caption"><h4>Compact SUV Wash</h4><span>Exterior Hand Wash</span></div></div>
                <div class="project"><img src="../images/image_05.jpg" alt=""><div class="caption"><h4>Interior Deep Clean</h4><span>Interior Vacuum</span></div></div>
                <div class="project"><img src="../images/image_07.jpg" alt=""><div class="caption"><h4>Tire &amp; Wheel Shine</h4><span>Wheel Shine</span></div></div>
                <div class="project"><img src="../images/image_08.jpg" alt=""><div class="caption"><h4>Sealer Hand Wax</h4><span>Paint Protection</span></div></div>
                <div class="project"><img src="../images/image_09.jpg" alt=""><div class="caption"><h4>Complete Wash</h4><span>Platinum Works</span></div></div>
            </div>
            <p class="text-center mt-40"><a href="gallery.html" class="btn btn--outline">View Full Gallery</a></p>
        </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Testimonials</span>
                <h2>What our customers say</h2>
            </div>
            <div class="grid grid--3">
                <div class="testimonial">
                    <p>"Autospa is the best car wash I have ever used. Love the price, convenience and customer service."</p>
                    <div class="name">David Magnus</div>
                    <div class="car">Nissan Titan X5</div>
                </div>
                <div class="testimonial">
                    <p>"Finally a car wash that pays attention to detail. The full detail always turns out great."</p>
                    <div class="name">Josh Williams</div>
                    <div class="car">Toyota Avensis</div>
                </div>
                <div class="testimonial">
                    <p>"Friendly staff and an amazing wash every single time. I highly recommend this place."</p>
                    <div class="name">Dotti Newman</div>
                    <div class="car">Mini Cooper</div>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== RECENT NEWS ===== -->
    <section class="section section--light">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Recent News</span>
                <h2>Recent from the blog</h2>
            </div>
            <div class="grid grid--3">
                <article class="post">
                    <img src="../images/image_04.jpg" alt="">
                    <div class="post-body">
                        <span class="date">April 26, 2017</span>
                        <h3><a href="how-to-choose-a-car-detailing-company.html">How To Choose a Car Detailing Company</a></h3>
                    </div>
                </article>
                <article class="post">
                    <img src="../images/image_05.jpg" alt="">
                    <div class="post-body">
                        <span class="date">April 25, 2017</span>
                        <h3><a href="interior-car-wash-and-detailing-service.html">Interior Car Wash And Detailing Service</a></h3>
                    </div>
                </article>
                <article class="post">
                    <img src="../images/image_07.jpg" alt="">
                    <div class="post-body">
                        <span class="date">April 24, 2017</span>
                        <h3><a href="how-to-book-a-car-wash-online.html">How To Book A Car Wash Online</a></h3>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- ===== CONTACT INFO ===== -->
    <section class="section">
        <div class="container">
            <div class="grid grid--3">
                <div class="info-box card"><div class="icon">&#9742;</div><h4>Call Us At</h4><p>(+505) 122 225 225<br>(+505) 122 225 224</p></div>
                <div class="info-box card"><div class="icon">&#9906;</div><h4>Our Address</h4><p>464 Rhode Island Av.<br>Portland, OR 97219</p></div>
                <div class="info-box card"><div class="icon">&#9203;</div><h4>Working Hours</h4><p>Monday - Friday: 8 am - 6 pm<br>Saturday: 8 am - 3 pm</p></div>
            </div>
        </div>
    </section>
`,
});

/* ---------------- ABOUT - STYLE I ---------------- */
PAGES.push({
    file: "about-style-i.html",
    title: "About - Style I",
    active: "pages",
    body: `
    <section class="section">
        <div class="container split">
            <div>
                <h2>Who Is Autospa</h2>
                <p>Autospa Hand Wash is an eco-friendly, hand car wash and detailing service based in Portland.
                   Our company was founded back in 2005 by a team of experts with more than 10 years of
                   professional car wash experience. We operate three car washes throughout the Portland area.</p>
                <p>Our goal is to provide our customers with the friendliest, most convenient hand car wash
                   experience possible. We use the most modern water reclamation modules and all our products
                   are biodegradable and eco-friendly.</p>
                <ul class="tick-list">
                    <li>Three convenient locations</li>
                    <li>Eco-friendly products</li>
                    <li>Trained and skilled crew</li>
                </ul>
            </div>
            <div><img src="../images/image_01.jpg" alt="Autospa"></div>
        </div>
    </section>

    <section class="section section--light">
        <div class="container">
            <div class="grid grid--3">
                <div class="card"><div class="icon">&#128188;</div><h3>Experienced Team</h3><p>Over 10 years of professional car wash experience.</p></div>
                <div class="card"><div class="icon">&#127793;</div><h3>Eco Friendly</h3><p>Biodegradable products and water reclamation.</p></div>
                <div class="card"><div class="icon">&#9873;</div><h3>Trusted Locally</h3><p>Proudly serving the Portland community since 2005.</p></div>
            </div>
        </div>
    </section>
`,
});

/* ---------------- ABOUT - STYLE II ---------------- */
PAGES.push({
    file: "about-style-ii.html",
    title: "About - Style II",
    active: "pages",
    body: `
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">About Us</span>
                <h2>We love your car the same as you do</h2>
            </div>
            <div class="grid grid--2">
                <img src="../images/image_02-1.jpg" alt="Autospa">
                <img src="../images/image_03.jpg" alt="Autospa">
            </div>
            <p class="mt-40">From express detail to full inside and out, our detailing services come with a personal
               touch. Our staff is trained to treat every vehicle as if it were their own.</p>
        </div>
    </section>

    <section class="section section--light">
        <div class="container">
            <div class="grid grid--4">
                <div class="counter"><div class="value">12</div><div class="label">Years</div></div>
                <div class="counter"><div class="value">3</div><div class="label">Locations</div></div>
                <div class="counter"><div class="value">25</div><div class="label">Crew Members</div></div>
                <div class="counter"><div class="value">9000+</div><div class="label">Happy Cars</div></div>
            </div>
        </div>
    </section>
`,
});

/* ---------------- SERVICES - STYLE I ---------------- */
PAGES.push({
    file: "services-style-i.html",
    title: "Services - Style I",
    active: "services",
    body: `
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Our Services</span>
                <h2>Car wash services we provide</h2>
            </div>
            <div class="grid grid--3">
                <div class="card"><div class="icon">&#128663;</div><h3>Exterior Hand Wash</h3><p>Gentle hand wash that protects your paint.</p></div>
                <div class="card"><div class="icon">&#9729;</div><h3>Towel Hand Dry</h3><p>Streak-free finish using soft microfibre towels.</p></div>
                <div class="card"><div class="icon">&#9899;</div><h3>Tire Dressing</h3><p>Restores a rich, deep black shine to your tires.</p></div>
                <div class="card"><div class="icon">&#9881;</div><h3>Wheel Shine</h3><p>Removes brake dust and grime from your wheels.</p></div>
                <div class="card"><div class="icon">&#10052;</div><h3>Interior Vacuum</h3><p>Deep cleaning for a fresh, spotless interior.</p></div>
                <div class="card"><div class="icon">&#10024;</div><h3>Sealer Hand Wax</h3><p>Long-lasting protection and a brilliant shine.</p></div>
            </div>
        </div>
    </section>
`,
});

/* ---------------- SERVICES - STYLE II ---------------- */
PAGES.push({
    file: "services-style-ii.html",
    title: "Services - Style II",
    active: "services",
    body: `
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Our Services</span>
                <h2>Packages for every vehicle</h2>
            </div>
            <div class="grid grid--2">
                <div class="card"><h3>Exterior Package</h3><p>Hand wash, towel dry, wheel shine and tire dressing.</p><a href="single-service-right-sidebar.html" class="btn">View Details</a></div>
                <div class="card"><h3>Interior Package</h3><p>Interior vacuum, dashboard clean and air freshener.</p><a href="single-service-right-sidebar.html" class="btn">View Details</a></div>
                <div class="card"><h3>Complete Detail</h3><p>Full inside and out detailing with hand wax.</p><a href="single-service-right-sidebar.html" class="btn">View Details</a></div>
                <div class="card"><h3>Platinum Works</h3><p>Our top package with sealer wax and window cleaning.</p><a href="single-service-right-sidebar.html" class="btn">View Details</a></div>
            </div>
        </div>
    </section>
`,
});

/* ---------------- SINGLE SERVICE (shared content) ---------------- */
const singleServiceBody = `
    <section class="section">
        <div class="container layout-sidebar%LAYOUT%">
            <article class="main">
                <img src="../images/image_05.jpg" alt="Exterior Hand Wash" class="mb-20">
                <h2>Exterior Hand Wash</h2>
                <p>Our exterior hand wash is the safest way to clean your vehicle. We use premium,
                   pH-neutral shampoo and soft microfibre mitts so your paint stays protected and glossy.</p>
                <p>The service includes a full hand wash, towel hand dry, wheel shine and tire dressing.</p>
                <h3>What is included</h3>
                <ul class="tick-list">
                    <li>Exterior Hand Wash</li>
                    <li>Towel Hand Dry</li>
                    <li>Wheel Shine</li>
                    <li>Tire Dressing</li>
                </ul>
                <a href="book-your-wash-i.html" class="btn mt-20">Book This Service</a>
            </article>
%SIDEBAR%
        </div>
    </section>
`;

const sidebarHtml = `
            <aside class="sidebar">
                <div class="widget">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="single-service-right-sidebar.html">Exterior Hand Wash</a></li>
                        <li><a href="single-service-right-sidebar.html">Towel Hand Dry</a></li>
                        <li><a href="single-service-right-sidebar.html">Wheel Shine</a></li>
                        <li><a href="single-service-right-sidebar.html">Interior Vacuum</a></li>
                    </ul>
                </div>
                <div class="widget">
                    <h4>Opening Hours</h4>
                    <p>Mon - Fri: 8 am - 6 pm<br>Saturday: 8 am - 3 pm</p>
                </div>
                <div class="widget">
                    <h4>Need Help?</h4>
                    <p>Call us at<br><strong>(+505) 122 225 225</strong></p>
                </div>
            </aside>`;

function singleService(file, layoutClass) {
    const body = singleServiceBody
        .replace("%LAYOUT%", layoutClass)
        .replace("%SIDEBAR%", sidebarHtml);
    return { file, title: "Single Service", active: "services", body };
}

PAGES.push(singleService("single-service-right-sidebar.html", ""));
PAGES.push(singleService("single-service-left-sidebar.html", " layout-sidebar--left"));

/* ---------------- GALLERY ---------------- */
PAGES.push({
    file: "gallery.html",
    title: "Gallery",
    active: "pages",
    body: `
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Our Work</span>
                <h2>Latest projects</h2>
            </div>
            <div class="grid grid--3">
                <div class="project"><img src="../images/image_03.jpg" alt=""><div class="caption"><h4>Luxury Sedan</h4><span>Full Detailing</span></div></div>
                <div class="project"><img src="../images/image_04.jpg" alt=""><div class="caption"><h4>Compact SUV</h4><span>Exterior Wash</span></div></div>
                <div class="project"><img src="../images/image_05.jpg" alt=""><div class="caption"><h4>Interior Clean</h4><span>Interior Vacuum</span></div></div>
                <div class="project"><img src="../images/image_07.jpg" alt=""><div class="caption"><h4>Wheel Shine</h4><span>Wheel Care</span></div></div>
                <div class="project"><img src="../images/image_08.jpg" alt=""><div class="caption"><h4>Hand Wax</h4><span>Paint Protection</span></div></div>
                <div class="project"><img src="../images/image_09.jpg" alt=""><div class="caption"><h4>Complete Wash</h4><span>Platinum Works</span></div></div>
                <div class="project"><img src="../images/image_10.jpg" alt=""><div class="caption"><h4>Detailing</h4><span>Full Service</span></div></div>
                <div class="project"><img src="../images/gallery_04.jpg" alt=""><div class="caption"><h4>Showroom Shine</h4><span>Hand Wax</span></div></div>
                <div class="project"><img src="../images/gallery_05.jpg" alt=""><div class="caption"><h4>Express Wash</h4><span>Basic Wash</span></div></div>
            </div>
        </div>
    </section>
`,
});

/* ---------------- CONTACT - STYLE I / II / III ---------------- */
const contactInfoBoxes = `
            <div class="grid grid--3 mb-40">
                <div class="info-box card"><div class="icon">&#9742;</div><h4>Call Us</h4><p>(+505) 122 225 225</p></div>
                <div class="info-box card"><div class="icon">&#9993;</div><h4>Email Us</h4><p>office@autospa.com</p></div>
                <div class="info-box card"><div class="icon">&#9906;</div><h4>Visit Us</h4><p>464 Rhode Island Av.<br>Portland, OR 97219</p></div>
            </div>`;

const contactForm = `
            <form action="#">
                <div class="grid grid--2">
                    <div class="form-group"><label>Your Name</label><input type="text" name="name" required></div>
                    <div class="form-group"><label>Your Email</label><input type="email" name="email" required></div>
                </div>
                <div class="form-group"><label>Subject</label><input type="text" name="subject"></div>
                <div class="form-group"><label>Message</label><textarea name="message"></textarea></div>
                <button class="btn" type="submit">Send Message</button>
            </form>`;

PAGES.push({
    file: "contact-style-i.html",
    title: "Contact - Style I",
    active: "contact",
    body: `
    <section class="section">
        <div class="container">
${contactInfoBoxes}
            <div class="split">
                <div>
                    <h2>Send us a message</h2>
                    <p>Our email is checked hourly during the day.</p>
${contactForm}
                </div>
                <div>
                    <img src="../images/image_04.jpg" alt="Contact">
                </div>
            </div>
        </div>
    </section>
`,
});

PAGES.push({
    file: "contact-style-ii.html",
    title: "Contact - Style II",
    active: "contact",
    body: `
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Contact</span>
                <h2>We are very open and easy to reach</h2>
            </div>
${contactInfoBoxes}
            <div style="max-width:700px;margin:0 auto;">
${contactForm}
            </div>
        </div>
    </section>
`,
});

PAGES.push({
    file: "contact-style-iii.html",
    title: "Contact - Style III",
    active: "contact",
    body: `
    <section class="section">
        <div class="container">
            <div class="grid grid--3 mb-40">
                <div class="info-box card"><div class="icon">&#9742;</div><h4>Phone</h4><p>(+505) 122 225 225<br>(+505) 122 225 224</p></div>
                <div class="info-box card"><div class="icon">&#9993;</div><h4>Email</h4><p><a href="mailto:office@autospa.com">office@autospa.com</a><br><a href="mailto:bookings@autospa.com">bookings@autospa.com</a></p></div>
                <div class="info-box card"><div class="icon">&#9906;</div><h4>Address</h4><p>464 Rhode Island Av.<br>Portland, OR 97219</p></div>
            </div>
            <h2 class="text-center mb-20">Leave a Message</h2>
            <div style="max-width:700px;margin:0 auto;">
${contactForm}
            </div>
        </div>
    </section>
`,
});

/* ---------------- BOOKING ---------------- */
PAGES.push({
    file: "book-your-wash-i.html",
    title: "Book Your Wash",
    active: "booking",
    body: `
    <section class="section">
        <div class="container split">
            <div>
                <h2>Book an appointment online</h2>
                <p>Booking your car wash takes under 3 minutes. Fill in the form and our team
                   will confirm your appointment by email.</p>
                <ul class="tick-list">
                    <li>Choose your package</li>
                    <li>Select a convenient time</li>
                    <li>Pay securely online</li>
                </ul>
            </div>
            <div>
                <form action="#">
                    <div class="form-group"><label>Full Name</label><input type="text" name="name" required></div>
                    <div class="form-group"><label>Email</label><input type="email" name="email" required></div>
                    <div class="form-group"><label>Phone</label><input type="tel" name="phone"></div>
                    <div class="form-group"><label>Select Package</label>
                        <select name="package">
                            <option>Basic Hand Wash - $15.95</option>
                            <option>Deluxe Wash - $27.95</option>
                            <option>Ultimate Shine - $40.45</option>
                            <option>Platinum Works - $65.95</option>
                        </select>
                    </div>
                    <div class="grid grid--2">
                        <div class="form-group"><label>Date</label><input type="text" name="date"></div>
                        <div class="form-group"><label>Time</label><input type="text" name="time"></div>
                    </div>
                    <button class="btn" type="submit">Book Now</button>
                </form>
            </div>
        </div>
    </section>
`,
});

/* ---------------- SHOP ---------------- */
const shopProducts = [
    ["Premium Car Shampoo", "12.99", "../images/image_01.jpg"],
    ["Microfibre Towel Set", "9.50", "../images/image_02-1.jpg"],
    ["Tire Shine Spray", "14.25", "../images/image_03.jpg"],
    ["Interior Cleaner", "11.75", "../images/image_04.jpg"],
    ["Hand Wax Kit", "24.99", "../images/image_05.jpg"],
    ["Wheel Brush", "8.40", "../images/image_07.jpg"],
];

PAGES.push({
    file: "shop.html",
    title: "Shop",
    active: "shop",
    body: `
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Shop</span>
                <h2>Car care products</h2>
            </div>
            <div class="grid grid--3">
${shopProducts.map(p => `                <div class="card">
                    <img src="${p[2]}" alt="${p[0]}" style="height:200px;object-fit:cover;border-radius:6px;">
                    <h3 class="mt-20">${p[0]}</h3>
                    <p class="price" style="text-align:left;font-size:26px;">$${p[1]}</p>
                    <a href="cart.html" class="btn">Add to Cart</a>
                </div>`).join("\n")}
            </div>
        </div>
    </section>
`,
});

/* ---------------- CART ---------------- */
PAGES.push({
    file: "cart.html",
    title: "Cart",
    active: "shop",
    body: `
    <section class="section">
        <div class="container">
            <h2 class="mb-20">Your Cart</h2>
            <table class="table table--cart">
                <thead>
                    <tr><th>Product</th><th>Name</th><th>Price</th><th>Quantity</th><th>Total</th></tr>
                </thead>
                <tbody>
                    <tr><td><img src="../images/image_01.jpg" alt=""></td><td>Premium Car Shampoo</td><td>$12.99</td><td>1</td><td>$12.99</td></tr>
                    <tr><td><img src="../images/image_02-1.jpg" alt=""></td><td>Microfibre Towel Set</td><td>$9.50</td><td>2</td><td>$19.00</td></tr>
                </tbody>
            </table>
            <div class="grid grid--2 mt-40">
                <div></div>
                <div class="card">
                    <h3>Cart Totals</h3>
                    <p>Subtotal: <strong>$31.99</strong></p>
                    <p>Total: <strong>$31.99</strong></p>
                    <a href="#" class="btn">Proceed to Checkout</a>
                </div>
            </div>
        </div>
    </section>
`,
});

/* ---------------- 404 ---------------- */
PAGES.push({
    file: "page-404.html",
    title: "Page 404",
    active: "pages",
    body: `
    <section class="section text-center">
        <div class="container">
            <h1 style="font-size:120px;color:#199cdb;margin-bottom:0;">404</h1>
            <h2>Oops! Page not found</h2>
            <p>The page you are looking for may have been moved or no longer exists.</p>
            <a href="index.html" class="btn">Back to Home</a>
        </div>
    </section>
`,
});

/* ---------------- SHORTCODES INDEX ---------------- */
PAGES.push({
    file: "shortcodes.html",
    title: "Shortcodes",
    active: "shortcodes",
    body: `
    <section class="section">
        <div class="container">
            <div class="section-title">
                <span class="eyebrow">Shortcodes</span>
                <h2>Ready to use components</h2>
            </div>
            <div class="grid grid--3">
                <div class="card"><h3>Accordion</h3><a href="accordion.html" class="btn">View</a></div>
                <div class="card"><h3>Buttons</h3><a href="button.html" class="btn">View</a></div>
                <div class="card"><h3>Tabs</h3><a href="tabs.html" class="btn">View</a></div>
                <div class="card"><h3>Progress Bars</h3><a href="progress-bars.html" class="btn">View</a></div>
                <div class="card"><h3>Notices</h3><a href="notice.html" class="btn">View</a></div>
                <div class="card"><h3>Tables</h3><a href="simple-table.html" class="btn">View</a></div>
            </div>
        </div>
    </section>
`,
});

module.exports = PAGES;

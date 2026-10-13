/* ============================================================
   Extra/misc page: Maintenance Mode
   ============================================================ */

const PAGES = [];

PAGES.push({
    file: "maintenance-mode.html",
    title: "Maintenance Mode",
    active: "pages",
    banner: false,
    body: `
    <!-- ===== MAINTENANCE ===== -->
    <section class="section section--dark text-center" style="min-height:70vh;display:flex;align-items:center;">
        <div class="container">
            <img src="../images/logo.png" alt="Auto Spa" style="height:52px;margin:0 auto 30px;filter:brightness(0) invert(1);">
            <h2>We'll be back soon!</h2>
            <p>Our website is currently under maintenance. Please check back later.</p>
            <div class="countdown">
                <div><div class="n">12</div><div class="t">Days</div></div>
                <div><div class="n">08</div><div class="t">Hours</div></div>
                <div><div class="n">45</div><div class="t">Minutes</div></div>
                <div><div class="n">30</div><div class="t">Seconds</div></div>
            </div>
            <p class="mt-40"><a href="contact-style-i.html" class="btn">Contact Us</a></p>
        </div>
    </section>
`,
});

module.exports = PAGES;

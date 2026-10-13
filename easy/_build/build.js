/* ============================================================
   BUILD SCRIPT  (easy/_build/build.js)
   ------------------------------------------------------------
   Ye script sab pages ko theme (header/footer) ke saath jodkar
   easy/ folder mein .html files likh deti hai.

   Chalane ka tareeqa:  node easy/_build/build.js
   ============================================================ */

const fs = require("fs");
const path = require("path");
const { layout } = require("./theme");

// Sab pages yahan collect karte hain
const pages = [
    ...require("./pages-main"),
    ...require("./pages-misc"),
    ...require("./pages-blog"),
    ...require("./pages-shortcodes"),
];

// Output folder = easy/
const outDir = path.join(__dirname, "..");

let written = 0;
for (const page of pages) {
    const html = layout({
        title: page.title,
        active: page.active || "",
        banner: page.banner !== false,
        body: page.body || "",
    });
    fs.writeFileSync(path.join(outDir, page.file), html, "utf8");
    written++;
}

console.log("Generated " + written + " pages in " + outDir);

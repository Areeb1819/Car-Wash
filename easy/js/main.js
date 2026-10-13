/* ============================================================
   Auto Spa - Simple JavaScript  (easy/js/main.js)
   ------------------------------------------------------------
   Sirf 2 choti cheezein:
   1. Mobile par menu (hamburger) kholna/band karna
   2. Tabs (shortcodes page) ka switch karna
   ============================================================ */

// 1. MOBILE MENU
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle) {
    navToggle.addEventListener("click", function () {
        nav.classList.toggle("open");
    });
}

// 2. TABS
const tabButtons = document.querySelectorAll(".tabs .tab-buttons button");

tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const tabsBox = button.closest(".tabs");

        // remove "active" from all buttons and panels inside this tabs box
        tabsBox.querySelectorAll(".tab-buttons button").forEach(b => b.classList.remove("active"));
        tabsBox.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));

        // add "active" to the clicked button and its panel
        button.classList.add("active");
        const panel = tabsBox.querySelector("#" + button.dataset.tab);
        if (panel) panel.classList.add("active");
    });
});

console.log("MSS Website Loaded");

const navMenu = document.getElementById("navMenu");
const navLine = document.getElementById("navLine");

navMenu.querySelectorAll("a").forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        const rect = e.target.getBoundingClientRect();
        const parentRect = navMenu.getBoundingClientRect();

        navLine.style.width = rect.width + "px";
        navLine.style.left = rect.left - parentRect.left + "px";
    });
});

navMenu.addEventListener("mouseleave", () => {
    navLine.style.width = "0px";
});

// ================================
// ROPRI CLEAN FUNCTIONAL VERSION
// (NO CART SYSTEM)
// ================================


// ================================
// LIVE SEARCH FILTER
// ================================

const searchInput = document.querySelector(".search-input");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    boxes.forEach((box) => {
        const productName = box.querySelector("h2").innerText.toLowerCase();

        if (productName.includes(value)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});


// ================================
// MOBILE MENU TOGGLE
// ================================

const menuBtn = document.querySelector(".panel-all");
const panelOps = document.querySelector(".panel-ops");

menuBtn.addEventListener("click", () => {
    if (panelOps.style.display === "block") {
        panelOps.style.display = "none";
    } else {
        panelOps.style.display = "block";
    }
});


// ================================
// BACK TO TOP SMOOTH
// ================================

const backToTop = document.querySelector(".foot-panel1");

backToTop.style.cursor = "pointer";

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


// ================================
// PRODUCT HOVER ANIMATION
// ================================

boxes.forEach((box) => {
    box.style.transition = "0.3s";

    box.addEventListener("mouseenter", () => {
        box.style.transform = "translateY(-5px)";
        box.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "translateY(0px)";
        box.style.boxShadow = "none";
    });
});


// ================================
// PRODUCT CLICK EFFECT
// ================================

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const productName = box.querySelector("h2").innerText;
        alert("You selected: " + productName);
    });
});
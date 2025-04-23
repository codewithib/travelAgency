// Grabbing my element from dom

const menuBtn = document.querySelector(".menuBtn");
const mobileList = document.querySelector(".mobileList");

const showMobileMenu = () => {
    const isDisplayNone = mobileList.style.display === "none";
    mobileList.style.display = isDisplayNone ? "flex" : "none";
}

menuBtn.addEventListener("click", () => {
    showMobileMenu();
});

document.addEventListener("DOMContentLoaded", () => {
    mobileList.style.display = "none";
})
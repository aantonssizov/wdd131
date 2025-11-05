const menuBtn = document.querySelector(".menu-btn");
const navigationElm = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    const titleElm = document.querySelector("span.title");

    navigationElm.classList.toggle("hidden");
    titleElm.classList.toggle("hidden");

    menuBtn.classList.toggle("closed");
    menuBtn.classList.toggle("opened");
});

const checkWidth = () => {
    if (window.screen.width < 500) {
        navigationElm.classList.add("hidden");
    } else {
        navigationElm.classList.remove("hidden");
    }
}

window.addEventListener("resize", checkWidth);

checkWidth();
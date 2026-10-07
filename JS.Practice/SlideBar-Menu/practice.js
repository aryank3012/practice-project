let btn = document.querySelector(".cross");
let slideBox = document.querySelector(".slideBar");
let menu = document.querySelector(".menu");

slideBox.addEventListener("click", () => {
    menu.classList.toggle("open");
});

btn.addEventListener("click", () => {
    menu.classList.remove("open");
});

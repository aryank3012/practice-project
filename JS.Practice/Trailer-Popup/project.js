let watchBtn = document.querySelector("#watchBtn");
let trailer = document.querySelector(".trailer");
let closeBtn = document.querySelector(".close");
let iframe = document.querySelector("iframe");

watchBtn.addEventListener("click", () => {
    trailer.classList.remove("hidden");
})

closeBtn.addEventListener("click", () => {
    trailer.classList.add("hidden");

    iframe.src = iframe.src;
});
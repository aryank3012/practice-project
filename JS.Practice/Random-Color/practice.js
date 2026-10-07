let btn = document.querySelector("button");
let screen = document.body;
let clrName = document.querySelector("#clrname");

function randomclr() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", () => {
    const color = randomclr();
    screen.style.backgroundColor = color;
    clrName.textContent = color;
})
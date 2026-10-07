let inputtxt = document.querySelector(".writtenText");
let count = document.querySelector(".charCount");
let remaining = document.querySelector(".charMinus");

inputtxt.addEventListener("input", function () {
    let content = inputtxt.value;
    count.textContent = content.length;
    remaining.textContent = 50 - content.length;
})
let password = document.querySelector("input");
let genrate = document.querySelector("#genrate");
let reset = document.querySelector("#reset");
let copyPass = document.querySelector("#copy");

let char = "abcdefghijklmnopqrstuvwxyz";
let digit = 123456789;
let specialChar = "!@#$%^&.,*+-/-_'";

let allChar = char + digit + specialChar;

function genPassword() {
    let pass = "";

    for (let i = 1; i < 10; i++) {
        let randomIdx = Math.floor(Math.random() * allChar.length);
        pass += allChar[randomIdx];
    }
    password.value = pass;
}

genrate.addEventListener("click", genPassword);

reset.addEventListener("click", () => {
    password.value = "";
})

copyPass.addEventListener("click", () => {
    if (password.value === "")
        return;

    navigator.clipboard.writeText(password.value);
    alert("Copied")
});
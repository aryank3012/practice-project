// let btnEl = document.querySelectorAll(".see");

// btnEl.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         let answer = btn.parentElement.nextElementSibling;
//         answer.classList.toggle("hidden");
//     });
// });

let btnEl = document.querySelectorAll(".see");

btnEl.forEach((btn) => {
    btn.addEventListener("click", () => {
        let answer = btn.closest(".questionBox").querySelector(".ans");
        answer.classList.toggle("hidden");
    });
});
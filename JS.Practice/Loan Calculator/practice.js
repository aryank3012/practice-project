let amount = document.querySelector("#amount");
let interest = document.querySelector("#interest");
let months = document.querySelector("#months");
let emi = document.querySelector("#emi");
let cal = document.querySelector("#calculate");
let clear = document.querySelector("#clear");

cal.addEventListener("click", () => {
    let loan = Number(amount.value);
    let interestRate = Number(interest.value);
    let duration = Number(months.value);
    let calInterest = interestRate / duration / 100;
    let total = loan * calInterest;

    emi.textContent = total;
})

clear.addEventListener("click", () => {
    amount.value = "";
    interest.value = "";
    months.value = "";
    emi.textContent = "";
})

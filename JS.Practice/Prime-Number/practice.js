let input = document.querySelector("#number");
let reset = document.querySelector("#clear");
let submit = document.querySelector("#submit");
let result = document.querySelector("#answer");

submit.addEventListener("click", () => {
    if (input.value === "") {
        alert("Enter the number");
        return;
    }

    let number = Number(input.value);

    if (number <= 1) {
        result.textContent = "It's not a Prime Number";
        return;
    }

    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        result.textContent = "It's a Prime Number";
    } else {
        result.textContent = "It's not a Prime Number";
    }
});

reset.addEventListener("click", () => {
    input.value = "";
    result.textContent = "Result";
});
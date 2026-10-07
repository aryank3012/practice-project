let numOne = document.querySelector("#numOne");
let numTwo = document.querySelector("#numTwo");
let btnOne = document.querySelector("#btnOne");
let ansOne = document.querySelector("#ansOne");

btnOne.addEventListener("click", () => {
    if (numOne.value === "" || numTwo.value === "") {
        alert("Fill both blanks");
    } else {
        let numberOne = Number(numOne.value);
        let numberTwo = Number(numTwo.value);
        const formulaOne = (numberOne / 100) * numberTwo;

        ansOne.textContent = formulaOne;
    }
})

let numThree = document.querySelector("#numThree");
let numFour = document.querySelector("#numFour");
let btnTwo = document.querySelector("#btnTwo");
let ansTwo = document.querySelector("#ansTwo");

btnTwo.addEventListener("click", () => {
    if (numThree.value === "" || numFour.value === "") {
        alert("Fill both blanks");
    } else {
        let numberThree = Number(numThree.value);
        let numberFour = Number(numFour.value);
        const formulaTwo = (numberThree / 100) * numberFour;

        ansTwo.textContent = formulaTwo;
    }
})
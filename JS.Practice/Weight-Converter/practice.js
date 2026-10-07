const inputNum = document.getElementById("inputNumber");
const kgSpan = document.getElementById("kilogram");
const resetBtn = document.getElementById("reset");

function poundsToKg(pounds) {
    return pounds * 0.453592;
}

inputNum.addEventListener("input", () => {
    const pounds = Number(inputNum.value);

    if (!inputNum.value || pounds < 0) {
        kgSpan.textContent = "00";
        return;
    }
    kgSpan.textContent = poundsToKg(pounds).toFixed(2);
});

function reset() {
    inputNum.value = "00";
    kgSpan.textContent = "00";
}

resetBtn.addEventListener("click", reset);
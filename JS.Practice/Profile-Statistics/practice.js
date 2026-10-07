let numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
    const target = Number(num.getAttribute("data-target"));
    let count = 0;

    const updateCount = () => {
        const increment = target / 70;

        count += increment;

        if (count < target) {
            num.innerText = Math.floor(count);
            setTimeout(updateCount, 20);
        } else {
            num.innerText = target;
        };
    };
    updateCount();
});
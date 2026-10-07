let password = document.querySelector("#enterPass");
let strength = document.querySelector("#strength");
let checker = document.querySelector("#checker");

password.addEventListener("input", () => {
    const digit = /\d/.test(password.value);
    const lowerCase = /[a-z]/.test(password.value);
    const upperCase = /[A-Z]/.test(password.value);
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/.test(password.value);
    let length = password.value.length;

    if (length === 0) {
        strength.textContent = "Enter Password";
        checker.style.width = "0%";
        checker.style.backgroundColor = "red";
    } else if (length <= 5) {
        strength.textContent = "Weak";
        checker.style.width = "20%";
        checker.style.backgroundColor = "red";
    } else if (length <= 7) {
        strength.textContent = "Medium";
        checker.style.width = "40%";
        checker.style.backgroundColor = "yellow";
    } else if (length >= 8 && upperCase && lowerCase && digit && specialChar) {
        strength.textContent = "Very Strong";
        checker.style.width = "100%";
        checker.style.backgroundColor = "green";
    } else if (length >= 8 && lowerCase && upperCase && digit) {
        strength.textContent = "Strong";
        checker.style.width = "75%";
        checker.style.backgroundColor = "orange";
    }
})
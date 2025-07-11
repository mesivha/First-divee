
const passwordInput = document.getElementById("password");
const strengthIndicator = document.getElementById("strength");

passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;

    if (value.length === 0) {
        strengthIndicator.textContent = "";
        strengthIndicator.className = "";
        return;
    }

    let strength = "Weak";
    let strengthClass = "weak";

    if (value.length >= 6 && /[a-zA-Z]/.test(value) && /\d/.test(value) && /[@$!%*?&#]/.test(value)) {
        strength = "Strong";
        strengthClass = "strong";
    } else if (value.length >= 6 && (/[a-zA-Z]/.test(value) || /\d/.test(value))) {
        strength = "Medium";
        strengthClass = "medium";
    }

    strengthIndicator.textContent = strength;
    strengthIndicator.className = strengthClass;
})
let user = document.querySelector(".user");
let pass = document.querySelector(".pass");

let userName = "2023B1541212";
let password = "2300321540071";

let form = document.querySelector("#registrationForm");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    if (userName === user.value && password === pass.value) {
        window.location.href = "index1.html";
    } else {
        alert("Invalid Username or Password");
    }
});

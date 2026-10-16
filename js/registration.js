
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    const password = document.getElementById("reg-password");
    const confirmPassword = document.getElementById("reg-confirm-password");

   
    function checkPasswords() {
        if (
            confirmPassword.value !== "" &&
            password.value !== confirmPassword.value
        ) {
            confirmPassword.setCustomValidity(
                "Passwords do not match."
            );
        } else {
            confirmPassword.setCustomValidity("");
        }
    }

  
    password.addEventListener("input", checkPasswords);
    confirmPassword.addEventListener("input", checkPasswords);

    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        checkPasswords();
        form.classList.add("was-validated");

        if (form.checkValidity()) {
            alert(
                "Demo registration successful! " +
                "No real account was created or stored."
            );
        }
    });

    form.addEventListener("reset", function () {
        form.classList.remove("was-validated");
        confirmPassword.setCustomValidity("");
    });
});

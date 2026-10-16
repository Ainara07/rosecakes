
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        form.classList.add("was-validated");

        if (form.checkValidity()) {
            alert(
                "Demo: Form validation successful! " +
                "No information was sent or stored."
            );
        }
    });
});

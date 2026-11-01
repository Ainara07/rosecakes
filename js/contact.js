
$(document).ready(function () {

    const form = $("#contact-form");
    const nameField = $("#contact-name");
    const emailField = $("#contact-email");
    const messageField = $("#contact-message");
    const result = $("#contact-result");

    const fields = [
        nameField,
        emailField,
        messageField
    ];

    function validateField(field) {

        const value = field.val().trim();
        const id = field.attr("id");

        let error = "";

        if (id === "contact-name") {
            if (value.length < 2) {
                error = "Name must contain at least 2 characters.";
            }
        }

        if (id === "contact-email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(value)) {
                error = "Please enter a valid email address.";
            }
        }

        if (id === "contact-message") {
            if (value.length < 10 || value.length > 500) {
                error = "Message must contain between 10 and 500 characters.";
            }
        }

        const isValid = error === "";

        field.toggleClass("is-invalid", !isValid);
        field.toggleClass("is-valid", isValid);
        field.attr("aria-invalid", String(!isValid));

        field.siblings(".invalid-feedback").text(error);

        return isValid;
    }

    fields.forEach(function (field) {

        const errorId = field.attr("id") + "-error";

        field.siblings(".invalid-feedback")
            .attr("id", errorId);

        field.attr("aria-describedby", errorId);

        field.on("input", function () {
            validateField(field);
            result.prop("hidden", true);
        });

    });

    form.on("submit", function (event) {

        event.preventDefault();

        let allValid = true;
        let firstInvalid = null;

        fields.forEach(function (field) {

            if (!validateField(field)) {
                allValid = false;

                if (firstInvalid === null) {
                    firstInvalid = field;
                }
            }

        });

        if (!allValid) {
            result.prop("hidden", true);
            firstInvalid.trigger("focus");
            return;
        }

        result
            .text(
                "Demo: Form validation successful! " +
                "No information was sent or stored."
            )
            .prop("hidden", false);

    });

});

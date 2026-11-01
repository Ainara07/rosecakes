$(document).ready(function () {

    const nameInput = $("#welcome-name");
    const welcomeButton = $("#welcome-button");
    const welcomeMessage = $("#welcome-message");

    nameInput.on("input", function () {
        const name = nameInput.val().trim();

        if (name === "") {
            welcomeMessage.text("");
        } else {
            welcomeMessage.text("Ready to greet " + name + ".");
        }
    });

    welcomeButton.on("click", function () {
        const name = nameInput.val().trim();

        if (name === "") {
            welcomeMessage.text("Please enter your name.");
        } else {
            welcomeMessage.text(
                "Welcome to Rose Cakes, " + name + "!"
            );
        }
    });


    $(".faq-question").on("click", function () {

        const button = $(this);
        const answerId = button.attr("aria-controls");
        const answer = $("#" + answerId);

        const isExpanded =
            button.attr("aria-expanded") === "true";

        answer.stop(true, true);

        if (isExpanded) {
            answer.slideUp(250);
        } else {
            answer.slideDown(250);
        }

        button.attr("aria-expanded", String(!isExpanded));
    });

    $("#faq-tip-toggle").on("click", function () {

        const button = $(this);
        const tip = $("#faq-tip-text");

        const isExpanded =
            button.attr("aria-expanded") === "true";

        tip.stop(true, true);

        if (isExpanded) {
            tip.fadeOut(300);
            button.text("Show Ordering Tip");
        } else {
            tip.fadeIn(300);
            button.text("Hide Ordering Tip");
        }

        button.attr("aria-expanded", String(!isExpanded));
    });

});

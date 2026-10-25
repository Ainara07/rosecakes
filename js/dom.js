const nameInput = document.getElementById("welcome-name");
const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.getElementById("welcome-message");

welcomeButton.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
        welcomeMessage.textContent = "Please enter your name.";
    } else {
        welcomeMessage.textContent =
            "Welcome to Rose Cakes, " + name + "!";
    }
});


const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-theme");

    if (isDark) {
        themeButton.textContent = "Switch to Light Theme";
    } else {
        themeButton.textContent = "Switch to Dark Theme";
    }

    themeButton.setAttribute("aria-pressed", String(isDark));
});



const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const answerId = button.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        const isExpanded =
            button.getAttribute("aria-expanded") === "true";

        answer.hidden = isExpanded;

        button.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

    });

});


const favouriteForm = document.getElementById("favourite-form");
const favouriteInput = document.getElementById("favourite-input");
const favouriteList = document.getElementById("favourite-list");
const favouriteCount = document.getElementById("favourite-count");
const favouriteFeedback = document.getElementById("favourite-feedback");

function updateFavouriteCount() {
    const total = favouriteList.querySelectorAll("li").length;
    favouriteCount.textContent = "Total favourites: " + total;
}

favouriteForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const cakeName = favouriteInput.value.trim();

    if (cakeName === "") {
        favouriteFeedback.textContent =
            "Please enter a cake name.";
        favouriteInput.focus();
        return;
    }

    favouriteFeedback.textContent = "";

    const newItem = document.createElement("li");

    const cakeText = document.createElement("span");
    cakeText.textContent = cakeName;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";

    removeButton.setAttribute(
        "aria-label",
        "Remove " + cakeName
    );

    removeButton.addEventListener("click", function () {
        newItem.remove();
        updateFavouriteCount();
    });

    newItem.append(cakeText, removeButton);
    favouriteList.append(newItem);

    updateFavouriteCount();

    favouriteInput.value = "";
    favouriteInput.focus();

});

updateFavouriteCount();

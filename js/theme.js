
$(function () {
    const themeButton = $("#theme-toggle");
    const savedTheme = localStorage.getItem("roseCakesTheme");
    $("body").toggleClass("dark-theme", savedTheme === "dark");

    function updateThemeButton() {
        const dark = $("body").hasClass("dark-theme");
        themeButton.text(dark ? "Switch to Light Theme" : "Switch to Dark Theme");
        themeButton.attr("aria-pressed", String(dark));
    }

    themeButton.on("click", function () {
        $("body").toggleClass("dark-theme");
        localStorage.setItem(
            "roseCakesTheme",
            $("body").hasClass("dark-theme") ? "dark" : "light"
        );
        updateThemeButton();
    });
    updateThemeButton();
});


$(function () {
    const form = $("#favourite-form");
    const input = $("#favourite-input");
    const list = $("#favourite-list");
    const count = $("#favourite-count");
    const feedback = $("#favourite-feedback");
    const empty = $("#favourite-empty");
    const storageKey = "roseCakesFavourites";

    function updateCount() {
        const total = list.children("li").length;
        count.text("Total favourites: " + total);
        empty.toggle(total === 0);
    }

    function saveFavourites() {
        const names = list.find(".cake-name").map(function () {
            return $(this).text();
        }).get();
        localStorage.setItem(storageKey, JSON.stringify(names));
    }

    function addFavourite(name) {
        const item = $("<li>").addClass("favourite-item");
        const cakeText = $("<span>").addClass("cake-name").text(name);
        const button = $("<button>").attr({
            type: "button",
            "aria-label": "Remove " + name
        }).addClass("remove-favourite").text("Remove");
        item.append(cakeText, button);
        list.append(item);
        updateCount();
    }

    let saved = [];
    try {
        saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch (error) {
        saved = [];
    }
    if (Array.isArray(saved)) {
        saved.forEach(function (name) {
            if (typeof name === "string" && name.trim()) addFavourite(name);
        });
    }

    form.on("submit", function (event) {
        event.preventDefault();
        const name = input.val().trim();
        if (name === "") {
            feedback.text("Please enter a cake name.");
            input.trigger("focus");
            return;
        }
        feedback.text("");
        addFavourite(name);
        saveFavourites();
        input.val("").trigger("focus");
    });

    list.on("click", ".remove-favourite", function () {
        $(this).closest("li").remove();
        updateCount();
        saveFavourites();
    });

    updateCount();
});

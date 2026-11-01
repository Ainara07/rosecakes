

$(document).ready(function () {

    const searchInput = $("#cake-search");
    const cakeCards = $(".cake-grid .cake-card");
    const searchCount = $("#search-count");
    const noResults = $("#no-results");
    const filterButtons = $(".filter-btn");

    let selectedCategory = "all";

    function filterCakes() {

        const searchText =
            searchInput.val().trim().toLowerCase();

        let visibleCount = 0;

        cakeCards.each(function () {

            const card = $(this);

            const cakeName = card.find("h3")
                .text()
                .trim()
                .toLowerCase();

            const category =
                card.attr("data-category");

            const matchesSearch =
                cakeName.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                category === selectedCategory;

            const isVisible =
                matchesSearch && matchesCategory;

            card.prop("hidden", !isVisible);

            if (isVisible) {
                visibleCount++;
            }

        });

        searchCount.text(
            "Showing " + visibleCount +
            " of " + cakeCards.length + " cakes"
        );

        noResults.prop(
            "hidden",
            visibleCount !== 0
        );
    }




    searchInput.on("input", function () {
        filterCakes();
    });



    filterButtons.on("click", function () {

        selectedCategory =
            $(this).attr("data-filter");

        filterButtons
            .removeClass("active")
            .attr("aria-pressed", "false");

        $(this)
            .addClass("active")
            .attr("aria-pressed", "true");

        filterCakes();
    });



    $("#clear-filters").on("click", function () {

        searchInput.val("");

        selectedCategory = "all";

        filterButtons
            .removeClass("active")
            .attr("aria-pressed", "false");

        $('.filter-btn[data-filter="all"]')
            .addClass("active")
            .attr("aria-pressed", "true");

        filterCakes();
    });


    

    filterCakes();

});

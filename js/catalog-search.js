

const searchInput = document.getElementById("cake-search");

const cakeCards = document.querySelectorAll(".cake-grid .cake-card");

const searchCount = document.getElementById("search-count");

const noResults = document.getElementById("no-results");

function filterCakes() {

    const searchText = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    cakeCards.forEach(function (card) {

        const cakeTitle = card.querySelector("h3")
            .textContent.trim().toLowerCase();

        const matches = cakeTitle.includes(searchText);

        card.hidden = !matches;

        if (matches) {
            visibleCount++;
        }

    });

    searchCount.textContent =
        "Showing " + visibleCount +
        " of " + cakeCards.length + " cakes";

    noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterCakes);

filterCakes();

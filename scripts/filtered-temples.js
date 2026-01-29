const temples = [
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: 1893,
        area: 253000,
        imageUrl: "images/salt-lake.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: 2019,
        area: 40000,
        imageUrl: "images/rome.jpg"
    },
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: 1919,
        area: 47000,
        imageUrl: "images/laie.jpg"
    }
];

const container = document.querySelector("#temples");

function displayTemples(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Size: ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}">
    `;

        container.appendChild(card);
    });
}

// Initial load
displayTemples(temples);

// Filters
document.querySelector("#old").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.dedicated < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.dedicated > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000));
});


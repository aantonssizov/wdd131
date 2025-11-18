const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/60ecad34b8ccba920297633d3f3b4763a7785667/full/1920%2C/0/default"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Kyiv, Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/cb24d06ddf8a489e1d1c4d610c0b1675c65f2f94/full/1920%2C/0/default"
    },
    {
        templeName: "Hong Kong China",
        location: "Kowloon City, Hong Kong",
        dedicated: "2022, June, 19",
        area: 51921,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/26e0eb04a0a8e9fc7dddd0c1fabdcb0a46926047/full/800%2C/0/default"
    }
];

function createTempleCard(temple) {
    let templeCardElm = document.createElement("div");
    templeCardElm.classList.add("temple-card");

    let templeCardTitleElm = document.createElement("h2");
    templeCardTitleElm.classList.add("temple-card-title");
    templeCardTitleElm.textContent = temple.templeName;

    let templeCardLocationLabelELm = document.createElement("span");
    templeCardLocationLabelELm.classList.add("temple-card-label");
    templeCardLocationLabelELm.textContent = "Location: ";

    let templeCardLocationELm = document.createElement("span");
    templeCardLocationELm.classList.add("temole-card-info");
    templeCardLocationELm.textContent = temple.location;
    templeCardLocationELm.insertAdjacentElement('afterbegin', templeCardLocationLabelELm);

    let templeCardDedicatedLabelELm = document.createElement("span");
    templeCardDedicatedLabelELm.classList.add("temple-card-label");
    templeCardDedicatedLabelELm.textContent = "Dedicated: ";

    let templeCardDedicatedELm = document.createElement("span");
    templeCardDedicatedELm.classList.add("temole-card-info");
    templeCardDedicatedELm.textContent = temple.dedicated;
    templeCardDedicatedELm.insertAdjacentElement('afterbegin', templeCardDedicatedLabelELm);

    let templeCardAreaLabelELm = document.createElement("span");
    templeCardAreaLabelELm.classList.add("temple-card-label");
    templeCardAreaLabelELm.textContent = "Area: ";

    let templeCardAreaELm = document.createElement("span");
    templeCardAreaELm.classList.add("temole-card-info");
    templeCardAreaELm.textContent = `${temple.area} sq ft`;
    templeCardAreaELm.insertAdjacentElement("afterbegin", templeCardAreaLabelELm);

    let templeCardImageElm = document.createElement("img");
    templeCardImageElm.classList.add("temple-card-image");
    templeCardImageElm.loading = "lazy";
    templeCardImageElm.src = temple.imageUrl;
    templeCardImageElm.alt = temple.templeName;

    templeCardElm.append(
        templeCardTitleElm,
        templeCardLocationELm,
        templeCardDedicatedELm,
        templeCardAreaELm,
        templeCardImageElm
    );

    return templeCardElm;
}

function renderTemples(temples) {
    let templeCards = temples.map(temple => createTempleCard(temple));
    let mainElm = document.querySelector("main");
    let oldTempleCards = mainElm.querySelectorAll(".temple-card");
    oldTempleCards.forEach(templeCard => templeCard.remove());
    mainElm.append(...templeCards);
}

function filterTemples(filterType) {
    switch (filterType) {
        case 'old':
            renderTemples(
                temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);

                    return year <= 1900;
                })
            );
            break;
        case 'new':
            renderTemples(
                temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(', ')[0]);

                    return year >= 2000;
                })
            );
            break;
        case 'large':
            renderTemples(
                temples.filter(temple => temple.area > 90000)
            );
            break;
        case 'small':
            renderTemples(
                temples.filter(temple => temple.area < 10000)
            );
            break;
        case 'home':
            renderTemples(temples);
            break;
        default:
            break;
    }
}

filterTemples('home');

const menuBtn = document.querySelector(".menu-btn");
const navigationElm = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    const titleElm = document.querySelector("span.title");

    navigationElm.classList.toggle("hidden");
    titleElm.classList.toggle("hidden");

    menuBtn.classList.toggle("closed");
    menuBtn.classList.toggle("opened");
});

const checkWidth = () => {
    if (window.innerWidth < 500) {
        navigationElm.classList.add("hidden");
    } else {
        navigationElm.classList.remove("hidden");
    }
}

window.addEventListener("resize", checkWidth);

checkWidth();
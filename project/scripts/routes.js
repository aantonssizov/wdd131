const LAST_TIME_VISITED_KEY = 'last_time_visited';

const routePointsSelect = document.querySelector('select#routePoints');
const makeARouteBtn = document.querySelector('button#make-a-route');
const lastTimeVisitedELm = document.querySelector('p#last-time-visited');

const germanBorderAndSeaCities = [
    "Hamburg",
    "Bremen",
    "Bremerhaven",
    "Wilhelmshaven",
    "Emden",
    "Cuxhaven",
    "Husum",
    "Westerland (Sylt)",
    "Kiel",
    "Lübeck",
    "Rostock",
    "Flensburg",
    "Stralsund",
    "Greifswald",
    "Wismar",
    "Schwerin",
    "Heringsdorf (Usedom)",
    "Aachen",
    "Saarbrücken",
    "Freiburg im Breisgau",
    "Konstanz",
    "Passau",
    "Dresden",
    "Nürnberg",
    "Görlitz",
    "Frankfurt (Oder)",
    "Trier"
];

function renderCities(cities) {
    const citiesOptions = cities.map(city => {
        const option = document.createElement('option');
        option.textContent = city;
        option.value = city;

        return option;
    });

    routePointsSelect.append(...citiesOptions);
}

function getLastTimeVisited() {
    const lastTimeVisited = localStorage.getItem(LAST_TIME_VISITED_KEY);
    let lastTimeVisitedText = '';

    if (!lastTimeVisited) {
        lastTimeVisitedText = 'We\'re glad that you can try out this page for the first time';
    } else {
        lastTimeVisitedText = `Thank you for using this tool. Last time you used it was on ${new Date(+lastTimeVisited).toDateString()}!`;
    }

    lastTimeVisitedELm.textContent = lastTimeVisitedText;
}

renderCities(germanBorderAndSeaCities);
getLastTimeVisited();

makeARouteBtn.addEventListener('click', () => {
    const selectedCities = Array.from(routePointsSelect.selectedOptions).map(option => option.value);

    if (!selectedCities.length) {
        alert('Please select at least one city');
        return;
    }

    const googleMapsUrl = `https://www.google.com/maps/dir/${selectedCities.join('/')}`;
    window.open(googleMapsUrl);

    localStorage.setItem(LAST_TIME_VISITED_KEY, Date.now());
});

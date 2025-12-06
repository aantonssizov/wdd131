const placesList = [
    {
        name: "Brandenburg Gate",
        location: "Berlin",
        type: "Monument",
        cyclingNotes: "Berlin is bike-friendly with extensive cycle paths; combine sightseeing with rides along the Spree River and Tiergarten.",
        image: "images/brandenburg-gate.webp"
    },
    {
        name: "Neuschwanstein Castle",
        location: "Bavaria (near Füssen)",
        type: "Castle",
        cyclingNotes: "Scenic alpine cycling routes lead to Füssen; expect steep climbs but breathtaking views of lakes and mountains.",
        image: "images/neuschwanstein.webp"
    },
    {
        name: "Cologne Cathedral",
        location: "Cologne",
        type: "Cathedral",
        cyclingNotes: "Located on the Rhine Cycle Route (EuroVelo 15); perfect stop on a long-distance ride along the river.",
        image: "images/cologne-cathedral.webp"
    },
    {
        name: "Sanssouci Palace and Gardens",
        location: "Potsdam",
        type: "Palace & Gardens",
        cyclingNotes: "Flat, easy cycling through gardens and palaces; ideal for leisurely rides with cultural stops.",
        image: "images/architecture.webp"
    },
    {
        name: "Black Forest",
        location: "Baden-Württemberg",
        type: "Natural Region",
        cyclingNotes: "Famous for challenging climbs and forest trails; the Black Forest Panorama Route is a cyclist's dream.",
        image: "images/castle.webp"
    },
    {
        name: "Zugspitze",
        location: "Bavaria (near Garmisch-Partenkirchen)",
        type: "Mountain",
        cyclingNotes: "Cycling possible in surrounding valleys with excellent mountain bike trails; combine with cable car rides for alpine views.",
        image: "images/zugspitze.webp"
    },
    {
        name: "Heidelberg Castle",
        location: "Heidelberg",
        type: "Castle",
        cyclingNotes: "Located on the Neckar Valley Cycle Route; gentle riverside cycling with a castle climb for those who want a challenge.",
        image: "images/heidelberg.webp"
    },
    {
        name: "Miniatur Wunderland",
        location: "Hamburg",
        type: "Exhibition",
        cyclingNotes: "Hamburg is flat and bike-friendly with routes along the Elbe; a cultural stop during urban cycling tours.",
        image: "images/hamburg.webp"
    },
    {
        name: "Romantic Road",
        location: "Southern Germany",
        type: "Scenic Route",
        cyclingNotes: "One of Germany's most famous cycling routes; 460 km through medieval towns, vineyards, and castles—ideal for multi-day bike tours.",
        image: "images/truss.webp"
    },
    {
        name: "Dachau Memorial",
        location: "Near Munich",
        type: "Historical Site",
        cyclingNotes: "Accessible via Munich's extensive bike paths; combine with rides through Bavarian countryside for reflection and history.",
        image: "images/concentration-camp.webp"
    }
];

function renderPlace(place) {
    const sectionElm = document.createElement('section');
    const image = document.createElement('img');
    const name = document.createElement('h2');
    const location = document.createElement('p');
    const type = document.createElement('p');
    const cyclingNotes = document.createElement('p');

    image.src = place.image;
    image.alt = place.name;
    image.loading = 'lazy';

    name.textContent = place.name;
    location.textContent = `Location: ${place.location}`;
    type.textContent = `Type: ${place.type}`;
    cyclingNotes.textContent = `Cycling Notes: ${place.cyclingNotes}`;

    sectionElm.append(name, image, location, type, cyclingNotes);
    return sectionElm;
}

function renderPlaces(places) {
    const placesContainer = document.querySelector('.places-container');
    const sections = places.map(place => renderPlace(place));

    placesContainer.append(...sections);
}

renderPlaces(placesList);

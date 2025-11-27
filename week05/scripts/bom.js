const CHAPTERS_ARRAY_KEY = 'chapters-array-key';
let chaptersArray = getChapterList() || [];

let favchapInpt = document.getElementById("favchap");
let addChapBtn = document.getElementById("addchap");
let chapListElm = document.getElementById("list");

chaptersArray.forEach(chapter => displayList(chapter));

addChapBtn.addEventListener("click", () => {
    if (favchapInpt.value.length === 0) {
        alert("Input field should not be empty");
        favchapInpt.focus();
        return;
    }

    displayList(favchapInpt.value);
    chaptersArray.push(favchapInpt.value);
    setChapterList();

    favchapInpt.value = "";
    favchapInpt.focus();
});

function displayList(item) {
    let chapListItemElm = document.createElement("li");
    let chapListItemDeleteBtn = document.createElement("button");

    chapListItemElm.textContent = item;
    chapListItemDeleteBtn.textContent = '❌';
    chapListItemElm.appendChild(chapListItemDeleteBtn);
    chapListElm.appendChild(chapListItemElm);

    chapListItemDeleteBtn.addEventListener('click', () => {
        chapListElm.removeChild(chapListItemElm)
        chaptersArray = chaptersArray.filter(chapter => chapter !== item);
        setChapterList();
        favchapInpt.focus();
    });
}

function setChapterList() {
    localStorage.setItem(CHAPTERS_ARRAY_KEY, JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem(CHAPTERS_ARRAY_KEY));
}

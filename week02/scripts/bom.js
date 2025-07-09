let favchapInpt = document.getElementById("favchap");
let addChapBtn = document.getElementById("addchap");
let chapListElm = document.getElementById("list");

addChapBtn.addEventListener("click", () => {
    if (favchapInpt.value.length === 0) {
        alert("Input field should not be empty");
        favchapInpt.focus();
        return;
    }

    let chapListItemElm = document.createElement("li");
    let chapListItemDeleteBtn = document.createElement("button");

    chapListItemElm.textContent = favchapInpt.value;
    chapListItemDeleteBtn.textContent = '❌';
    chapListItemElm.appendChild(chapListItemDeleteBtn);
    chapListElm.appendChild(chapListItemElm);

    chapListItemDeleteBtn.addEventListener('click', () => {
        chapListElm.removeChild(chapListItemElm)
        favchapInpt.focus();
    });

    favchapInpt.value = "";
    favchapInpt.focus();
});

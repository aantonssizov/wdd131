let favchapInpt = document.getElementById("favchap");
let addChapBtn = document.getElementById("addchap");
let chapListElm = document.getElementById("list");

let chapListItemElm = document.createElement("li");
let chapListItemDeleteBtn = document.createElement("button");

chapListItemElm.textContent = favchapInpt.value;
chapListItemDeleteBtn.textContent = '❌';
chapListItemElm.appendChild(chapListItemDeleteBtn);
chapListElm.appendChild(chapListItemElm)
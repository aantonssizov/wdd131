const startposition = document.URL.indexOf("?");
const params = new URLSearchParams(document.URL.substring(startposition + 1));

if (params.has('name')) {
    const pElm = document.querySelector('p');
    const name = params.get('name');

    pElm.textContent = `${name}, thank you for your experience! Enjoy your future travels!`;
} else {
    alert("Uhm, we don't have enough info, please go back and enter all required information.");
}
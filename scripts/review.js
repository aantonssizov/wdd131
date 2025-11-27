const SUCCESS_COUNTER_KEY = 'success_counter_key';

let startposition = document.URL.indexOf("?");

let params = new URLSearchParams(document.URL.substring(startposition + 1));

if (params.size >= 3
    && params.has("product-name")
    && params.has("overall-rating")
    && params.has("date-of-instalation")) {
    let counter = +localStorage.getItem(SUCCESS_COUNTER_KEY) || 0;
    counter++;
    localStorage.setItem(SUCCESS_COUNTER_KEY, counter);

    let counterElm = document.querySelector("#success-counter");
    counterElm.textContent = `You succesfully submited your review for ${counter} ${counter === 1 ? 'time' : 'times'}!`;
} else {
    document.querySelector('h2').textContent = "Unfortunately we couldn't accept your form, please varify it again at the previous page!";
}
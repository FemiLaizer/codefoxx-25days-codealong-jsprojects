let quoteArray = [];
let index = 0;
let textPosition = 0;
let flag = true;
let destination = document.getElementById("typedtext");

function loadQuote(){
    const url = "https://api.quotable.io/random";

    fetch(url);
}
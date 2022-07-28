const btn = document.querySelector("#btn");
let hexColor = "#";
let body = document.querySelector("body");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function pickRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function changeBackground() {

    for (let i = 0; i < 6; i++) {
        hexColor += hex[pickRandomNumber()];
    }
    console.log(hexColor);
    body.style.backgroundColor = hexColor;
    hexColor = "#";
}
btn.addEventListener("click", changeBackground);
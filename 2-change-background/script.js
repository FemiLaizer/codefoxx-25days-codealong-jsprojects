const btn = document.querySelector("#btn");
let body = document.querySelector("body");
let r = 1;
let g = 1;
let b = 1;

function getRandomNumber() {
    return Math.floor(Math.random() * 200);
}

function changeBackground() {
    let rgb =
        `rgb(${r * getRandomNumber()},${g * getRandomNumber()},${b * getRandomNumber()})`;
    console.log(rgb);
    body.style.backgroundColor = rgb;
}
btn.addEventListener("click", changeBackground);
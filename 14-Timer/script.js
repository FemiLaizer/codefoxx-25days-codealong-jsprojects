const span = document.querySelectorAll("span");
const timeBox = document.querySelector('.time-box');
let minuteDouble = document.getElementById('minute-double');
let minuteSingle = document.getElementById('minute-single');
let secondDouble = document.getElementById('second-double');
let secondSingle = document.getElementById('second-single');
let miliDouble = document.getElementById('mili-double');
let miliSingle = document.getElementById('mili-single');
let count = 0;

timeBox.addEventListener('click', start);

timeBox.addEventListener('dblclick', stop);

function start() {
    if (minuteDouble.textContent < 9) {
        minuteSingle.textContent++;
    } if (minuteSingle.textContent < 9) {
        secondDouble.textContent++;
    } if (secondDouble.textContent < 9) {
        secondSingle.textContent++;
    } if (secondSingle.textContent < 9) {
        miliDouble.textContent++;
    } if (miliDouble.textContent < 9) {
        count++
        miliSingle.textContent = count;
    }
}

function stop() {
    console.log('stop');
}


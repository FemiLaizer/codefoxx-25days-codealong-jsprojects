const span = document.querySelectorAll("span");
const timeBox = document.querySelector('.time-box');

timeBox.addEventListener('click', start);

timeBox.addEventListener('dblclick', stop);

function start() {
    console.log('start');
}

function stop() {
    console.log('stop');
}
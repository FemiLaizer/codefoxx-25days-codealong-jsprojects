const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

window.addEventListener('load', dayNightMode);

input.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        loadImg();
    }
})

function loadImg() {
    removeImages();

    const url = 'https://api.unsplash.com/search/photos/?query=' + input.value + '&per_page=9&client_id='
}

function removeImages() {
    grid.innerHTML = '';
}

function dayNightMode() {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 7 && hour <= 19) {
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}
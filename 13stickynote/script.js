let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');
let checkIcon = document.querySelector('#check-icon');
let xIcon = document.querySelector('#x-icon');
let i = 0;

function typeNote() {
    if (container3.style.display == "none") {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}

function createNote() {
    let noteText = document.querySelector("#note-text").value;
    let div = document.createElement("div");
    let h1 = document.createElement("h1");

    h1.innerHTML = noteText;

    h1.setAttribute("style",
        "width:250px; height:250px; font-size:26px; margin-top:10px; overflow:hidden; box-shadow:0 10px 24px 0 rgba(0,0,0,.75)");

    h1.style.margin = margin();
    h1.style.transform = rotate();
    h1.style.background = color();

    div.appendChild(h1);
    container2.insertAdjacentElement("beforeend", div);

    h1.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
    })


    h1.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    })


    h1.addEventListener("dblclick", function () {
        this.remove();
    })
}

function margin() {
    const random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
    const random_rotate = ["rotate(3deg)", "ratate(1deg)", "rotate(-1deg)", "rotate(-3deg)",
        "rotate(-5deg)", "rotate(-10deg)"];

    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
    const random_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];

    if (i > random_color.length - 1) {
        i = 0;
    }
    return random_color[i++];
}

xIcon.addEventListener('click', function () {
    typeNote();
})

checkIcon.addEventListener('click', function () {
    createNote();
    document.querySelector("#note-text").value = "";
})
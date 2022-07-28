let count = 0;
let counter = document.querySelector("#count");

function changeCount(num){
    count += num;
    counter.innerHTML = count;
}

const count = document. querySelector('#counter-value');

function decrement(){
    let value = parseInt(count.innerText);
    value = value - 1;
    count.innerText = value;
}
function increment(){
    let value = parseInt(count.innerText);
    value = value + 1;
    count.innerText = value;
}
function reset(){
    value = 0;
    count.innerText = value;
}
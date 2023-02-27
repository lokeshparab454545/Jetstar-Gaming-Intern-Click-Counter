let countBtn = document.getElementById('btn-count');
let resetBtn = document.getElementById('btn-reset');
let countNum = document.getElementById('count');

countBtn.addEventListener('click', () => {
    countNum.innerHTML++;
})

resetBtn.addEventListener('click', () => {
    countNum.innerHTML = 0;
})
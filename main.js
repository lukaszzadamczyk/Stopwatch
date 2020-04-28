// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const stoper = document.querySelector('.time div');

let time = 0;
let active = false;
let inT;

const startTime = () => {
    if (active === false) {
        active = active = true;
        btnStart.textContent = 'Pauza';
        inT = setInterval(start, 10);
    } else {
        active = active = false;
        btnStart.textContent = 'Start';
        clearInterval(inT);
    }
}

const start = () => {
    time++;
    stoper.textContent = (time / 100).toFixed(2);
}

const resetTime = () => {
    time = 0;
    stoper.textContent = '---';
}



btnStart.addEventListener('click', startTime)
btnReset.addEventListener('click', resetTime);
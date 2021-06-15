let totalSeconds = 0;
let timeLeft = { d: 0, h: 0, m: 0, s: 0 };
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const dateSelect = document.querySelector('#dateSelect');
const countDownContainer = document.querySelector('.countDown');
const zero = document.querySelector('.zero > h2');
var alarm = new Audio('sounds/rooster.mp3');
let targetDate = new Date();

dateSelect.addEventListener('change', () => {
    targetDate = new Date(dateSelect.value);
    if (targetDate > new Date()) {
        zero.classList.add('hide');
        countDownContainer.classList.remove('hide');
        countDown();
    }
})

function setTimeLeft() {
    timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24)).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    timeLeft.m = Math.floor(totalSeconds / 60 % 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    timeLeft.s = Math.floor(totalSeconds % 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
}

function updateCountDown() {
    days.textContent = timeLeft.d;
    hours.textContent = timeLeft.h;
    minutes.textContent = timeLeft.m;
    seconds.textContent = timeLeft.s;
}

function countDown() {
    const x = setInterval(() => {
        totalSeconds = Math.floor((targetDate - new Date()) / 1000);
        setTimeLeft();
        updateCountDown();
        if (totalSeconds === 0) {
            clearInterval(x);
            alarm.play();
            countDownContainer.classList.add('hide');
            zero.textContent = "It's time!!!";
            zero.classList.remove('hide');
        }
    }, 1000)
}




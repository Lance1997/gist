// variables
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const days = document.getElementById('days');

const container = document.getElementById('container');
const currentYear = new Date().getFullYear();

const timeNewYear = new Date(`January 01 ${currentYear + 2} 00:00:00`);

function updateTimer() {
    const timeNow = new Date();
    const result = timeNewYear - timeNow;

    const sec = Math.floor(result / 1000) % 60;
    const min = Math.floor(result / 1000 / 60) % 60;
    const hour = Math.floor(result / 1000 / 60 / 60) % 24;
    const day = Math.floor(result / 1000 / 60 / 60 / 24);

    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    hours.innerHTML = hour;
    days.innerHTML = day;
}

setInterval(updateTimer,1000);
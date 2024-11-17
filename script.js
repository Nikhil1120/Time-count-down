
let intervalId;
let timeLeft = 300; // 5 minutes in seconds
let isRunning5Min = false;

let intervalId1;
let timeLeft1 = 1800; // 30 minutes in seconds
let isRunning30Min = false;

document.getElementById('btn').addEventListener('click', function () {
    if (!isRunning5Min) {
        isRunning5Min = true;
        intervalId = setInterval(updateTime, 1000);
    } else {
        clearInterval(intervalId);
        intervalId = null;
        isRunning5Min = false;
    }
});

function updateTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeString = `${pad(minutes)}:${pad(seconds)}`;

    document.getElementById('p').innerHTML = timeString;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(intervalId);
        intervalId = null;
        isRunning5Min = false;
        document.getElementById('p').innerHTML = '00:00';
        timeLeft = 300; // Reset timeLeft
    }
}

document.getElementById('btn1').addEventListener('click', function () {
    if (!isRunning30Min) {
        isRunning30Min = true;
        intervalId1 = setInterval(updateTime1, 1000);
    } else {
        clearInterval(intervalId1);
        intervalId1 = null;
        isRunning30Min = false;
    }
});

function updateTime1() {
    const minutes = Math.floor(timeLeft1 / 60);
    const seconds = timeLeft1 % 60;
    const timeString = `${pad(minutes)}:${pad(seconds)}`;

    document.getElementById('para').innerHTML = timeString;
    timeLeft1--;

    if (timeLeft1 < 0) {
        clearInterval(intervalId1);
        intervalId1 = null;
        isRunning30Min = false;
        document.getElementById('para').innerHTML = '00:00';
        timeLeft1 = 1800; // Reset timeLeft1
    }
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

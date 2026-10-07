let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

const display = document.getElementById("timer");

document.getElementById("start").onclick = start;
document.getElementById("stop").onclick = stop;
document.getElementById("reset").onclick = reset;

function start() {
    if (isRunning) return;

    isRunning = true;
    startTime = Date.now() - elapsedTime;

    timer = setInterval(update, 10)
}

function stop() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    display.textContent = "00:00:00";
}

function update() {
    const time = Date.now() - startTime;

    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    display.textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}:` +
        `${String(milliseconds).padStart(2, "0")}`;
}
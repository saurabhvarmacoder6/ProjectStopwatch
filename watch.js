let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId = null;

const timeText = document.querySelector(".timeText");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");

function runStopwatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timeText.innerText = `${h}:${m}:${s}`;
}

startBtn.addEventListener("click", () => {
  if (intervalId !== null) return;
  intervalId = setInterval(runStopwatch, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeText.innerText = "00:00:00";
});

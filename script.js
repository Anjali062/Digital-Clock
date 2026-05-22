const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    const date = new Date();

    let hr = date.getHours();
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    const ampm = hr >= 12 ? "PM" : "AM";

    hr = hr % 12 || 12;

    time.textContent = `${hr}:${min}:${sec}`;
    timeformat.textContent = ampm;

    console.log(`Hour: ${hr} Minute: ${min} Second: ${sec}`);
};
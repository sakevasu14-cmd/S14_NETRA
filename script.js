function updateClock() {
    const clock = document.getElementById("clock");
    if(clock)
        clock.textContent = new Date().toLocaleTimeString();

}
//run once now, then repeat every 1000 ms
updateClock();
setInterval

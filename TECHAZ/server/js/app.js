//DATE Function
let clockTick = () => {
    //Dom variables
    let hoursDate = document.querySelector('#hoursDate');
    let minutesDate = document.querySelector('#minutesDate');
    let secondsDate = document.querySelector('#secondsDate');

    //DATA FORMAT
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    
    //Zero write for number
    if (hours < 10)
        hours = '0' + hours


    if (minutes < 10)
        minutes = '0' + minutes

    if (seconds < 10)
        seconds = '0' + seconds

    hoursDate.innerHTML = hours;
    minutesDate.innerHTML = minutes;
    secondsDate.innerHTML = seconds;
}

setInterval( () => {
    clockTick();
}, 1000);
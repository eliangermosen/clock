const $time = document.querySelector("h1");

const currentTime = () =>{

    let date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    let fullTime = `${hour}:${minute}:${second}`;
    $time.innerText = fullTime;
}

currentTime();
setInterval(currentTime, 1000);
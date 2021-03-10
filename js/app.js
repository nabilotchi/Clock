setInterval(setClock, 1000)


const hour = document.querySelector('[data-hour]')
const minute = document.querySelector('[data-minute]')
const second = document.querySelector('[data-second]')
const clock = document.querySelector('.clock')



function setClock() {
const date = new Date()
const seconds = date.getSeconds() / 60
const minutes = (seconds + date.getMinutes()) / 60
const hours = (minutes + date.getHours()) / 12
setRotation(hour, hours)
setRotation(minute, minutes)
setRotation(second, seconds)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotate', rotationRatio * 360)
}
setClock()

//*time
setInterval(showTime, 1000)

function showTime(){
    let date = new Date();
    let h    = date.getHours();
    let m    = date.getMinutes();
    let s    = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    if(h > 17 || h < 5){
        clock.classList.add('night');
    }
    

    document.getElementById("h").textContent = h;
    document.getElementById("m").textContent = m;
    document.getElementById("s").textContent = s;   

    setTimeout(showTime, 1000);
}
showTime();

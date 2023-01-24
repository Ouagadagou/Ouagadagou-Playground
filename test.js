const inputId = document.getElementById("input")
const inputValue = document.getElementById("input").value
const secondsId = document.getElementById("seconds")
const minutesId = document.getElementById("minutes")
const hoursId = document.getElementById("hours")
const resetId = document.getElementById("reset")
const startId = document.getElementById("start")
const pauseId = document.getElementById("pause")
const resumeId = document.getElementById("resume")
var state
var s = 0;
var m = 0;
var h = 0;
inputId.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        var inputValue = document.getElementById("input").value;
        console.log(inputValue);
        window.open(`https://www.google.com/search?q=${inputValue}`);
    }
})
function start() {
    pauseId.classList.remove("hidden");
    startId.classList.add("hidden");
    setTimeout(function() {
        if (state === false) {
            return
        }
        else {
            s++;
            if (s > 99) {
                s = 0;
                secondsId.innerHTML = "0" + s
                m++;
                if (m > 59) {
                    m = 0
                    minutesId.innerHTML = "0" + m
                    h++
                    if (h < 10) {
                        hoursId.innerHTML = "0" + h
                    } else {
                        hoursId.innerHTML = h
                    }
                    start()
                } else {
                    if (m < 10) {
                        minutesId.innerHTML = "0" + m
                    } else {
                        minutesId.innerHTML = m
                    }
                    start()
                }
            } else {
                if (s < 10) {
                    secondsId.innerHTML = "0" + s
                } else {
                    secondsId.innerHTML = s
                }
                start()
            }
        }
    }, 10);
}   
function reset() {
    s = 0;
    m = 0;
    h = 0;
    secondsId.innerHTML = "0" + m
    minutesId.innerHTML = "0" + m
    hoursId.innerHTML = "0" + h
}
function pause() {
    state = false;
    pauseId.classList.add("hidden");
    resumeId.classList.remove("hidden");
}
function resume() {
    state = true;
    resumeId.classList.add("hidden");
    pauseId.classList.remove("hidden");
    start()
}

function save() {
    let list = document.getElementById("time");
    let li = document.createElement("li");
    li.innerText = hoursId.innerHTML + " : " + minutesId.innerHTML + " : " + secondsId.innerHTML;
    list.appendChild(li);
}
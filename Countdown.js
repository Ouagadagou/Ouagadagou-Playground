// Variables and constants
const inputH = document.getElementById("input-h");
const inputM = document.getElementById("input-m");
const inputS= document.getElementById("input-s");
const secondsId = document.getElementById("seconds");
const minutesId = document.getElementById("minutes");
const hoursId = document.getElementById("hours");
const resetId = document.getElementById("reset");
const startId = document.getElementById("start");
const pauseId = document.getElementById("pause");
const resumeId = document.getElementById("resume");
var state;
var s
var m
var h

//Script
function update() {
    setTimeout(function() {
        //Hours
        if (state === true){
            return
        }
        else {
            if (inputH.value >= 0 && inputH.value <= 99) {
                h = +inputH.value
                if (h < 10) {
                    hoursId.innerHTML = "0" + (h + 0)
                } 
                if (h >= 10) {
                    hoursId.innerHTML = h
                }
            }
            update();
        }
        //Minutes
        if (state === true){
            return
        }
        else {
            if (inputM.value >= 0 && inputM.value <= 99) {
                m = +inputM.value
                if (m < 10) {
                    minutesId.innerHTML = "0" + (m + 0)
                } else {
                    minutesId.innerHTML = m
                }
            }
            update();
        }
        //Seconds
        if (state === true){
            return
        }
        else {
            if (inputS.value >= 0 && inputS.value <= 99) {
                s = +inputS.value
                if (s < 10) {
                    secondsId.innerHTML = "0" + (s + 0)
                } else {
                    secondsId.innerHTML = s
                }
            }
            update();
        }
    }, 100);
}
update()
function clock() {
    setTimeout(function() {
        if (state === false) {
            return
        }
        else {
            s--;
            if (s < 0) {        
                m--;
                s = 99;
                if (s < 10) {
                    secondsId.innerHTML = "0" + s
                } else {
                    secondsId.innerHTML = s
                }
                if (m < 0) {
                    m = 59
                    h--
                    if (m < 10) {
                        minutesId.innerHTML = "0" + m
                    } else {
                        minutesId.innerHTML = m
                    }
                    if (h < 10) {
                        hoursId.innerHTML = "0" + h
                    } else {
                        hoursId.innerHTML = h
                    }
                    clock()
                } else {
                    if (m < 10) {
                        minutesId.innerHTML = "0" + m
                    } else {
                        minutesId.innerHTML = m
                    }
                    clock()
                }
            } 
            else {
                if (s < 10) {
                    secondsId.innerHTML = "0" + s
                } else {
                    secondsId.innerHTML = s
                }
                clock()
            }
        }
    }, 10);
}   
function start() {
    pauseId.classList.remove("hidden");
    startId.classList.add("hidden");
    state = true;
    clock();
}
function reset() {
    let list = document.getElementById("time");
    let num = list.childElementCount
    let i = 0
    list.classList.add("hidden")
    while (i < num) {
    list.removeChild(list.firstChild);
    i++
    }
    state = false;
    secondsId.innerHTML = "0" + m;
    minutesId.innerHTML = "0" + m;
    hoursId.innerHTML = "" + h;
    pauseId.classList.add("hidden");
    resumeId.classList.add("hidden");
    startId.classList.remove("hidden");
    update()
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
    clock()
}
function save() {
    let list = document.getElementById("time");
    let li = document.createElement("li");
    if (list.childElementCount < 10) {
    li.className = "center";
    li.innerText = hoursId.innerHTML + " : " + minutesId.innerHTML + " : " + secondsId.innerHTML;
    list.appendChild(li);
    list.classList.remove("hidden")
    }
}
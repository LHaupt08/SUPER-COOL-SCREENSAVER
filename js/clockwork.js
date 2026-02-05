"use strict";

// Function Serves as an active clock.

currentClock();
setInterval("currentClock()", 1000);

function currentClock() {

    var curDay = new Date();
    var curDate = curDay.toLocaleDateString();
    var curTime = curDay.toLocaleTimeString();

    document.getElementById("timeInd").innerHTML = curTime;
    document.getElementById("dateInd").innerHTML = curDate;

}
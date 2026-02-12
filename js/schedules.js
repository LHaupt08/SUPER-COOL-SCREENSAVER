"use strict";

// This function will apply school schedule to the website based off of what option is selected in the dropdown

setupSchedule();
document.getElementById("scheduleType").onchange = function() {setupSchedule()};

function setupSchedule() {

    // Sets up for the heading, which changes colors and text depending on what is selected in the dropdown.
    var scheduleHTML = "<div class='can jrsy-font' id='scheduleBox'><h1 id='test' ";


    // It changes color first.
    var classColor = changeColor();

    scheduleHTML += "class='" + classColor + "'>";


    var curSchedule = selectSchedule();

    scheduleHTML += curSchedule + "</h1>";

    scheduleHTML += grabTimes(classColor);
    //grabTimes();

    document.getElementById("schedule").innerHTML = scheduleHTML;
    gradientChanger(curSchedule);

}

function changeColor() {

    // Class Names first!
    var fontRB = "rbtext";
    var fontGr = "greentext";
    var fontBl = "bluetext"

    // Determines the value of what is selected in dropdown.
    const selectedElement = document.getElementById("scheduleType");
    const curSchedule = selectedElement.value;

    // Determines what value it is so it can be set to the correct class name!
    if (curSchedule === "Red / Black Day") {

        var classColor = fontRB;

    } else if(curSchedule === "Green Day") {

        var classColor = fontGr;

    } else {

        var classColor = fontBl;

    }

    return classColor;

}

function selectSchedule() {

    // Grabs Value and returns it.
    const selectedElement = document.getElementById("scheduleType");
    const curSchedule = selectedElement.value;

    return curSchedule;

}

function grabTimes(classColor) {

    // Sets up schedule layout.

    var timeHTML = "";
    var indexTrackerI = 0;

    // Hoping to make the system more modular: ?

    var scheduleHours;
    var scheduleBeginTimes;
    var scheduleEndTimes;
    var scheduleLunchBeginTimes;
    var scheduleLunchEndTimes;

    var lunchBreak;

    if (classColor == "rbtext") {

        scheduleHours = longHour;
        scheduleBeginTimes = longSchBegin;
        scheduleEndTimes = longSchEnd;
        scheduleLunchBeginTimes = longLunchSchBegin;
        scheduleLunchEndTimes = longLunchSchEnd;

    }else if (classColor == "greentext") {

        scheduleHours = shortHour;
        scheduleBeginTimes = shortSchBegin;
        scheduleEndTimes = shortSchEnd;
        scheduleLunchBeginTimes = shortLunchSchBegin;
        scheduleLunchEndTimes = shortLunchSchEnd;
        
    }else {

        scheduleHours = weirdHour;
        scheduleBeginTimes = weirdSchBegin;
        scheduleEndTimes = weirdSchEnd;
        scheduleLunchBeginTimes = weirdLunchSchBegin;
        scheduleLunchEndTimes = weirdLunchSchEnd;
        
    }

    if (scheduleHours.length == 4) {
        lunchBreak = 3;
    }else {
        lunchBreak = 5;
    }

    for (var i = 0; i < scheduleHours.length; i++) {

        var dateBegin= new Date(scheduleBeginTimes[i]);
        var timeBegin = dateBegin.toLocaleTimeString();

        var dateEnd= new Date(scheduleEndTimes[i]);
        var timeEnd = dateEnd.toLocaleTimeString();

        timeHTML += "<h2 class='jrsy-font'><span>" + scheduleHours[i] + "</span><span> " + timeBegin + " - " + timeEnd + "</span></h2>";

        indexTrackerI +=1;

        if (indexTrackerI === lunchBreak) {

            timeHTML += "<div class='drawer'><div class='can'><div class='drawer'>"

            var indexTrackerA = 0;

            for (var a = 0; a < lunchHour.length; a++) {

                var lunchDateBegin= new Date(scheduleLunchBeginTimes[a]);
                var lunchTimeBegin = lunchDateBegin.toLocaleTimeString();

                var lunchDateEnd= new Date(scheduleLunchEndTimes[a]);
                var lunchTimeEnd = lunchDateEnd.toLocaleTimeString();

                timeHTML += "<div class='can horiReadjust'><h2 class='jrsy-font'>" + lunchHour[a] + "</h2><h2 class='jrsy-font'>" + lunchTimeBegin + " - " + lunchTimeEnd + "</div>";

                indexTrackerA += 1;

                if (indexTrackerA === 2) {

                    timeHTML += "</div><div class='drawer'>"

                }

            }

        }

        timeHTML += "</div></div></div>"

    }
//window.alert(timeHTML);
return timeHTML;
}


// Code for gradient


function gradientChanger(curSchedule) {
    var schedule = "";
    var seconds = "";

    if (curSchedule === "Red / Black Day") {
        schedule="redblack";
        seconds = 6;
    } else if(curSchedule === "Green Day") {
        schedule="green";
        seconds = 3;
    } else {
        schedule="blue";
        seconds = 2;
    }

    keyframes(schedule);

    var animHTML = "html:has(.can>.drawer>input.coolBG:checked) {background: linear-gradient(320deg, var(--startColor), var(--endColor)); animation: gradient ";
    animHTML += seconds + "s linear infinite;}";

    document.getElementById("coolBackground").innerHTML = animHTML;

}

function keyframes(schedule) {

    var keyframes ="";

    if (schedule=="redblack") {
        keyframes = "@keyframes gradient {0%,100% {--startColor: #ff7a7a;--endColor: #6c6c6c;} 20% {--startColor: #6c6c6c;--endColor: #000000;}40% {--startColor: #000000;--endColor: #5b0000;}60% {--startColor: #5b0000;--endColor: #c24848;}80% {--startColor: #c24848;--endColor: #ff7a7a;}}"
    }else if (schedule=="green") {
        keyframes = "@keyframes gradient {0%,100% {--startColor: #4f9a49;--endColor: #8ebd1e;}35% {--startColor: #8ebd1e;--endColor: #000000;}50% {--startColor: #000000;--endColor: #000000;}75% {--startColor: #000000;--endColor: #4f9a49;}"
    }else {
        keyframes = "@keyframes gradient {0%,100% {--startColor: #000000;--endColor: #000000;}15% {--startColor: #000000;--endColor: #3d21ba;}20% {--startColor: #3d21ba;--endColor: #3555c0;}40% {--startColor: #4c8ecc;--endColor: #00a5c2;}45% {--startColor: #00a5c2;--endColor: #000000;}50% {--startColor: #000000;--endColor: #000000;}55% {--startColor: #3d21ba;--endColor: #000000;}60% {--startColor: #3555c0;--endColor: #3d21ba;}80% {--startColor: #00a5c2;--endColor: #4c8ecc;}85% {--startColor: #000000;--endColor: #00a5c2;}}"
    }
    document.getElementById("animationSet").innerHTML = keyframes;
}

/*  Planning for how to layout html



*/
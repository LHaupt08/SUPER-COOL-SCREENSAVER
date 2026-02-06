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

    document.getElementById("schedule").innerHTML = scheduleHTML;

    grabTimes();

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

function grabTimes() {

    var timeHTML = "";

    for (var i = 0; i < longSchBegin.length; i++) {

        var longDateBegin= new Date(longSchBegin[i]);
        var longTimeBegin = longDateBegin.toLocaleTimeString();

        var longDateEnd= new Date(longSchEnd[i]);
        var longTimeEnd = longDateEnd.toLocaleTimeString();

        timeHTML += longHour[i] + " " + longTimeBegin + " - " + longTimeEnd;

    }

    window.alert(timeHTML);
}

/*  Planning for how to layout html
<div>

    <h2>longHour[i] + longTime[i]</h2>    time variable will contain both times.
    <h2>longHour[i] + longTime[i]</h2>
    <h2>longHour[i] + longTime[i]</h2>

    <div>

        <h3>longLunchHour[0] + longLunchTime[0]</h2>
        <h3>longLunchHour[1] + longLunchTime[1]</h2>
        <h3>longLunchHour[2] + longLunchTime[2]</h2>
        <h3>longLunchHour[3] + longLunchTime[3]</h2>

    </div>

    <h2>longHour[i] + longTime[i]</h2> */
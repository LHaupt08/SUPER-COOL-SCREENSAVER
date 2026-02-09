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

    scheduleHTML += grabTimes();
    //grabTimes();

    document.getElementById("schedule").innerHTML = scheduleHTML;

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
    var indexTracker = 0;

    for (var i = 0; i < longSchBegin.length; i++) {

        var longDateBegin= new Date(longSchBegin[i]);
        var longTimeBegin = longDateBegin.toLocaleTimeString();

        var longDateEnd= new Date(longSchEnd[i]);
        var longTimeEnd = longDateEnd.toLocaleTimeString();
        indexTracker +=1;

        timeHTML += "<h2><span>" + longHour[i] + "</span><span> " + longTimeBegin + " - " + longTimeEnd + "</span></h2>";

        //timeHTML += longHour[i] + " " + longTimeBegin + " - " + longTimeEnd + " ";

        if (indexTracker === 3) {

            timeHTML += "<div class='drawer'>"

            for (var a = 0; a < longLunchSchBegin.length; a++) {

                var longLunchDateBegin= new Date(longLunchSchBegin[a]);
                var longLunchTimeBegin = longLunchDateBegin.toLocaleTimeString();

                var longLunchDateEnd= new Date(longLunchSchEnd[a]);
                var longLunchTimeEnd = longLunchDateEnd.toLocaleTimeString();

                timeHTML += "<div class='can' style='margin-left:5px; margin-right:5px;'><h2 class='jrsy-font'>" + lunchHour[a] + "</h2><h2 class='jrsy-font'>" + longLunchTimeBegin + " - " + longLunchTimeEnd + "</div>";
                //lunchHour[a] + " " + longLunchTimeBegin + " - " + longLunchTimeEnd + " ";

            }

            timeHTML += "</div>"

        }

    }

    //window.alert(timeHTML);
    return timeHTML;
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
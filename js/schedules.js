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

    // Sets up schedule layout.

    var timeHTML = "";
    var indexTrackerI = 0;

    for (var i = 0; i < longSchBegin.length; i++) {

        var longDateBegin= new Date(longSchBegin[i]);
        var longTimeBegin = longDateBegin.toLocaleTimeString();

        var longDateEnd= new Date(longSchEnd[i]);
        var longTimeEnd = longDateEnd.toLocaleTimeString();

        timeHTML += "<h2><span>" + longHour[i] + "</span><span> " + longTimeBegin + " - " + longTimeEnd + "</span></h2>";

        //timeHTML += longHour[i] + " " + longTimeBegin + " - " + longTimeEnd + " ";

        indexTrackerI +=1;

        if (indexTrackerI === 3) {

            timeHTML += "<div class='drawer'><div class='can'><div class='drawer'>"

            var indexTrackerA = 0;


            for (var a = 0; a < longLunchSchBegin.length; a++) {

                var longLunchDateBegin= new Date(longLunchSchBegin[a]);
                var longLunchTimeBegin = longLunchDateBegin.toLocaleTimeString();

                var longLunchDateEnd= new Date(longLunchSchEnd[a]);
                var longLunchTimeEnd = longLunchDateEnd.toLocaleTimeString();

                timeHTML += "<div class='can horiReadjust'><h2 class='jrsy-font'>" + lunchHour[a] + "</h2><h2 class='jrsy-font'>" + longLunchTimeBegin + " - " + longLunchTimeEnd + "</div>";
                //lunchHour[a] + " " + longLunchTimeBegin + " - " + longLunchTimeEnd + " ";

                indexTrackerA += 1;

                if (indexTrackerA === 2) {

                    timeHTML += "</div><div class='drawer'>"

                }

            }

            timeHTML += "</div></div></div>"

        }

    }

    //window.alert(timeHTML);
    return timeHTML;
}

/*  Planning for how to layout html



*/
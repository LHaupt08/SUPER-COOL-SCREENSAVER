"use strict";

// This function will apply school schedule to the website based off of what option is selected in the dropdown

setupSchedule();
setInterval("setupSchedule()", 1000);

function setupSchedule() {

    var scheduleHTML = "<div class='can jrsy-font' id='scheduleBox'><h1 id='test'";

    scheduleHTML += "class='rbText'>test</h1>";
    document.getElementById("schedule").innerHTML = scheduleHTML;

}

function checkDropdown() {

    var fontRB = "rbText";
    var fontGr = "greenText";
    var fontBl = "blueText"

    const selectedElement = document.getElementById("scheduleType");
    const curSchedule = selectedElement.value;

    if (curSchedule === "Red / Black Day") {

        var classColor = fontRB;

    } else if(curSchedule === "Green Day") {

        var classColor = fontGr;

    } else {

        var classColor = fontBl;

    }

    

}

// document.getElementById("scheduleBox").innerHTML = "<h1 class='jrsy-font' id='testSchedule'>What Schedule are we on?</h1>"
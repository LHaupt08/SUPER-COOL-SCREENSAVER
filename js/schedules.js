"use strict";

// This function will apply school schedule to the website based off of what option is selected in the dropdown

setupSchedule();
setInterval("setupSchedule()", 1000)

function setupSchedule() {

    var scheduleHTML = document.getElementById("schedule").innerHTML = "<div class='can' id='scheduleBox'><h1 id='testSchedule' class='jrsy-font'>*Current Schedule Here*</h1>";

    checkDropdown();

    scheduleHTML += "</div>";

}

function checkDropdown() {

    const selectedElement = document.getElementById("scheduleType");
    const curSchedule = selectedElement.value;

    document.getElementById("testSchedule").innerHTML = curSchedule;

}

// document.getElementById("scheduleBox").innerHTML = "<h1 class='jrsy-font' id='testSchedule'>What Schedule are we on?</h1>"
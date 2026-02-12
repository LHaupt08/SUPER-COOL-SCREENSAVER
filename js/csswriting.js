"use strict";


/*function gradientChanger() {*/

    var animHTML = "html:has(.can>.drawer>input.coolBG:checked) {background: linear-gradient(320deg, var(--startColor), var(--endColor)); animation: gradient ";
    animHTML += "6s linear infinite;}";

    document.getElementById("animationSet").innerHTML = animHTML;

/*}*/
(function() {
    "use strict";

    var intervalId;
    function allAnimationFrames() {
        document.getElementById("text-area").innerHTML = ANIMATIONS[document
            .getElementById("animation").value];
    }

    function startAnimation() {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        var animation = ANIMATIONS[document.getElementById("animation").value];
        var splitAnimation = animation.split("=====\n");
        var speed = document.getElementById("turbo").checked ? 50 : 250;
        var i = 0;
        intervalId = setInterval(
            function() {
                document.getElementById("text-area").innerHTML = splitAnimation[i++];
                if (i === splitAnimation.length) {
                    i = 0;
                }
            }, speed);
    }

    function stopAnimation() {
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        clearInterval(intervalId);
    }

    function changeSize() {
        var size = document.getElementById("fontsize").value;
        var fontSize = 12;
        switch (size) {
            case "tiny":
                fontSize = 7;
                break;
            case "small":
                fontSize = 10;
                break;
            case "medium":
                fontSize = 12;
                break;
            case "large":
                fontSize = 16;
                break;
            case "extralarge":
                fontSize = 24;
                break;
            case "xxl":
                fontSize = 32;
                break;
            default:
                fontSize = 12;
        }
        document.getElementById("text-area").style.fontSize = fontSize + "pt";
debugger
    }

    function turbo() {
        if (document.getElementById("start").disabled) {
            stopAnimation();
            startAnimation();
        }
    }

    window.onload = function() {
        document.getElementById("start").onclick = startAnimation;
        document.getElementById("stop").onclick = stopAnimation;
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("animation").onchange = allAnimationFrames;
        document.getElementById("fontsize").onchange = changeSize;
        document.getElementById("turbo").onchange = turbo;
    };
})();
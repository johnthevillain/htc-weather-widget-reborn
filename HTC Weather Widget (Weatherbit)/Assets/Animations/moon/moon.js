var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

function changeImage() {
    var image = document.getElementById("moonContainer");
    image.onload = null;
    if (hours == 18) {
        image.src = "moon/moon-6pm.png";
    } else if (hours == 19) {
        image.src = "moon/moon-7pm.png";
    } else if (hours == 20) {
        image.src = "moon/moon-8pm.png";
    } else if (hours == 21) {
        image.src = "moon/moon-9pm.png";
    } else if (hours == 22) {
        image.src = "moon/moon-10pm.png";
    } else if (hours == 23) {
        image.src = "moon/moon-11pm.png";
    } else if (hours == 00) {
        image.src = "moon/moon-12am.png";
    } else if (hours == 1) {
        image.src = "moon/moon-1am.png";
    } else if (hours == 2) {
        image.src = "moon/moon-2am.png";
    } else if (hours == 3) {
        image.src = "moon/moon-3am.png";
    } else if (hours == 4) {
        image.src = "moon/moon-4am.png";
    } else if (hours == 5) {
        image.src = "moon/moon-5am.png";
    } else if (hours == 6) {
        image.src = "moon/moon-6am.png";
    } else {
        image.src = "moon/moon-12am.png";
    }
}
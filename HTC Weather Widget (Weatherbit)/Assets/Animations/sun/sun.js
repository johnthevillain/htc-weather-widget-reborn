var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

function changeImage() {
    var image = document.getElementById("sunContainer");
    image.onload = null;
    if (hours == 6) {
        image.src = "sun/sun-6am.png";
    } else if (hours == 7) {
        image.src = "sun/sun-7am.png";
    } else if (hours == 8) {
        image.src = "sun/sun-8am.png";
    } else if (hours == 9) {
        image.src = "sun/sun-9am.png";
    } else if (hours == 10) {
        image.src = "sun/sun-10am.png";
    } else if (hours == 11) {
        image.src = "sun/sun-11am.png";
    } else if (hours == 12) {
        image.src = "sun/sun-12pm.png";
    } else if (hours == 13) {
        image.src = "sun/sun-1pm.png";
    } else if (hours == 14) {
        image.src = "sun/sun-2pm.png";
    } else if (hours == 15) {
        image.src = "sun/sun-3pm.png";
    } else if (hours == 16) {
        image.src = "sun/sun-4pm.png";
    } else if (hours == 17) {
        image.src = "sun/sun-5pm.png";
    } else if (hours == 18) {
        image.src = "sun/sun-6pm.png";
    } else {
        image.src = "sun/sun-12pm.png";
    }
}
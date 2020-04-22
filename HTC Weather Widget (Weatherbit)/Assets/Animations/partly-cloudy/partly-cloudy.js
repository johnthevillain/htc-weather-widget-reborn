var partlyCloudy = {
    NUMBER_OF_CLOUDS: 14,
    NUMBER_OF_IMAGES: 16,
    createACloud: function() {
        var cloudDiv = document.createElement("div");
        var image = document.createElement("img");
        image.src = "partly-cloudy/cloud-" + this.randomInteger(1, this.NUMBER_OF_IMAGES) + ".png";
        cloudDiv.style.top = this.pixelValue(this.randomInteger(-15, 90));
        cloudDiv.style.left = this.pixelValue(this.randomInteger(-220, -100));
        var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
        cloudDiv.style.webkitAnimationName = "fade, float";
        image.style.webkitAnimationName = spinAnimationName;
        var fadeAndfloatDuration = this.durationValue(this.randomFloat(100, 250));
        var spinDuration = this.durationValue(this.randomFloat(40, 80));
        cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
        image.style.webkitAnimationDuration = spinDuration;
        cloudDiv.appendChild(image);
        return cloudDiv;
    },
    durationValue: function(value) {
        return value + "s";
    },
    init: function() {
        var container = document.getElementById("cloudContainer");
        for (var i = 0; i < this.NUMBER_OF_CLOUDS; i++) {
            container.appendChild(this.createACloud())
        }
    },
    pixelValue: function(value) {
        return value + "px";
    },
    randomFloat: function(low, high) {
        return low + Math.random() * (high - low);
    },
    randomInteger: function(low, high) {
        return low + Math.floor(Math.random() * (high - low));
    }
};
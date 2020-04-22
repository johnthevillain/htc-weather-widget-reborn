var hazy = {
    NUMBER_OF_CLOUDS: 30,
    NUMBER_OF_IMAGES: 13,
    createACloud: function() {
        var cloudDiv = document.createElement("div");
        var image = document.createElement("img");
        image.src = "hazy/haze-" + this.randomInteger(4, this.NUMBER_OF_IMAGES) + ".png";
        cloudDiv.style.top = this.pixelValue(this.randomInteger(-200, 350));
        cloudDiv.style.left = this.pixelValue(this.randomInteger(-110, -110));
        var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
        cloudDiv.style.webkitAnimationName = "float";
        image.style.webkitAnimationName = spinAnimationName;
        var fadeAndfloatDuration = this.durationValue(this.randomFloat(40, 70));
        var spinDuration = this.durationValue(this.randomFloat(30, 80));
        cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
        image.style.webkitAnimationDuration = spinDuration;
        cloudDiv.appendChild(image);
        return cloudDiv;
    },
    durationValue: function(value) {
        return value + "s";
    },
    init: function() {
        var container = document.getElementById("hazeContainer");
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
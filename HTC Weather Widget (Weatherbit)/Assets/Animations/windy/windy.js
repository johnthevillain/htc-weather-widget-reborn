var windy = {
    NUMBER_OF_LEAFS: 12,
    NUMBER_OF_IMAGES: 9,
    createALeaf: function() {
        var windDiv = document.createElement("div");
        var image = document.createElement("img");
        image.src = "windy/leaf-" + this.randomInteger(1, this.NUMBER_OF_IMAGES) + ".png";
        windDiv.style.top = this.pixelValue(this.randomInteger(0, 480));
        windDiv.style.left = this.pixelValue(this.randomInteger(-80, 0));
        var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
        windDiv.style.webkitAnimationName = "fade, float";
        image.style.webkitAnimationName = spinAnimationName;
        var fadeAndfloatDuration = this.durationValue(this.randomFloat(4, 8));
        var spinDuration = this.durationValue(this.randomFloat(6, 20));
        windDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
        image.style.webkitAnimationDuration = spinDuration;
        windDiv.appendChild(image);
        return windDiv;
    },
    durationValue: function(value) {
        return value + "s";
    },
    init: function() {
        var container = document.getElementById("windContainer");
        for (var i = 0; i < this.NUMBER_OF_LEAFS; i++) {
            container.appendChild(this.createALeaf())
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
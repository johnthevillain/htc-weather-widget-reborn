var rain = {
    NUMBER_OF_DROPS: 80,
    NUMBER_OF_IMAGES: 4,
    createADrop: function() {
        var dropDiv = document.createElement("div");
        var image = document.createElement("img");
        image.src = "rain/drop-" + this.randomInteger(1, this.NUMBER_OF_IMAGES) + ".png";
        dropDiv.style.top = this.pixelValue(this.randomInteger(-150, -50));
        dropDiv.style.left = this.pixelValue(this.randomInteger(0, 414));
        var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
        dropDiv.style.webkitAnimationName = "drop";
        image.style.webkitAnimationName = spinAnimationName;
        var fadeAndDropDuration = this.durationValue(this.randomFloat(1, 3));
        var spinDuration = this.durationValue(this.randomFloat(1, 3));
        dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;
        image.style.webkitAnimationDuration = spinDuration;
        dropDiv.appendChild(image);
        return dropDiv;
    },
    durationValue: function(value) {
        return value + "s";
    },
    init: function() {
        var container = document.getElementById("dropContainer");
        for (var i = 0; i < this.NUMBER_OF_DROPS; i++) {
            container.appendChild(this.createADrop());
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
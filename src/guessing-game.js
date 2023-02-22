class GuessingGame {
    constructor() {
        this.root = null;
    }

    setRange(min, max) {
        this.minVal = min;
        this.maxVal = max;
        return this.minVal, this.maxVal
    }

    guess() {
        let attempt = Math.round((this.minVal + (this.maxVal-this.minVal)/2));
        return attempt;
    }

    lower() {
        this.maxVal = Math.round((this.minVal + (this.maxVal-this.minVal)/2))
        return this.maxVal
    }

    greater() {
        this.minVal = Math.round((this.minVal + (this.maxVal-this.minVal)/2));
        return this.minVal
    }
}

module.exports = GuessingGame;

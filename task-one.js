class ObstructionDetector {
    constructor(speed, distance) {
        /**
         * Initialize the ObstructionDetector with speed and distance.
         *
         * @param {number} speed - Speed of the machine in miles per minute.
         * @param {number} distance - Distance between points A and B in miles.
         */
        this.speed = speed;
        this.distance = distance;
    }

    calculateExpectedTime() {
        /**
         * Calculate the expected time to travel from point A to point B.
         *
         * @return {number} Expected time in minutes.
         */
        const expectedTime = this.distance / this.speed;
        return expectedTime;
    }

    checkObstruction(actualTime) {
        /**
         * Check for obstructions and determine if they are impenetrable.
         *
         * @param {number} actualTime - Actual time taken to travel from point A to point B in minutes.
         * @return {boolean} True if there is an impenetrable obstruction, false otherwise.
         */
        const expectedTime = this.calculateExpectedTime();

        // If the actual time exceeds the expected time by 60 minutes, consider it an impenetrable obstruction.
        if (actualTime > expectedTime + 60) {
            return true;
        } else {
            return false;
        }
    }
}

// Example usage
const actualTime = 78;  // minutes

// Create an instance of ObstructionDetector with speed and distance
const speedOfMachine = 4;  // miles per minute
const distanceAToB = 10;   // miles
const detector = new ObstructionDetector(speedOfMachine, distanceAToB);

// Determine if there is an obstruction and if it's impenetrable
const isImpenetrableObstruction = detector.checkObstruction(actualTime);

if (isImpenetrableObstruction) {
    console.log("There is an impenetrable obstruction.");
} else {
    console.log("There are no impenetrable obstructions.");
}

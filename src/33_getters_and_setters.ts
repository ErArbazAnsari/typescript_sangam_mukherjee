class Temperature {
    #c = 0; // private actual temperature value

    constructor(celcius: number) {
        this.celcius = celcius; // setter runs and validates
    }

    get celcius(): number {
        return this.#c; // returns the private value
    }

    set celcius(value: number) {
        if (Number.isNaN(value)) {
            throw new Error("Temperature must be a number");
        }
        if (value < -50 || value > 50) {
            throw new Error("Temperature out of safe range!");
        }

        this.#c = value;
    }
}
const fridge = new Temperature(5);
console.log(fridge.celcius); // 5

fridge.celcius = 200; // give error, because the temp.. is not in the range

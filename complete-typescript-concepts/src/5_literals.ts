type Direction = "up" | "down" | "left" | "right";

function move(d: Direction): void {
    console.log(`Moving ${d}`);
}

const d1 = "up";
move(d1); // Valid

let d2 = "down";
// move(d2); // not Valid because d2 could be reassigned to any string value

// best way to fix it
let d3: Direction = "right";
move(d3); // Valid

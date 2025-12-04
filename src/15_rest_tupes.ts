function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3));

// tupes rest parameters
function makeRange(
    ...args: [start: number, end: number, step?: number]
): number[] {
    const [start, end, step = 1] = args;
    const out: number[] = [];
    for (let i = start; i <= end; i += step) {
        out.push(i);
    }
    return out;
}
console.log(makeRange(1, 10, 2)); // [1,3,5,7,9]
console.log(makeRange(5, 15)); // [5,6,7,8,9,10,11,12,13,14,15]

// spread
function draw(x: number, y: number): void {
    console.log(`Drawing at coordinates (${x}, ${y})`);
}
const coords: [number, number] = [10, 20]; // or const corrds: Array<number> = [10, 20];
draw(...coords); // Drawing at coordinates (10, 20)

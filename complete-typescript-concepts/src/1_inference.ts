// goal =>  understand when to let typescript infer types and when to explicitly define them
// ts => know js very well
// when ts will infer types? when we don't know what type we need to use

let a = 10; // type inference => number
const site = "arbaz.dev"; // type inference => string
const you_link = [1, 2, 3, 4, 5]; // type inference => number[]

// over innotation is not bad => just noisy

export function sum(a: number, b: number): number {
    return a + b;
}

// we should also annotate when the type is not clear/obvious
let maybe: number | string; // union type

maybe = Math.random() > 0.3 ? 10 : "ten";
console.log(maybe);

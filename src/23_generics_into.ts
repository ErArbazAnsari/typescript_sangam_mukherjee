// understand what is type parameter <T>
// how typescript infer <T> from our arguments automatically

// is a function -> the types are *blank* -> and will fill in future/later
// <T> is a placeholder
// Ts will try to understand, what T should be

function id<T>(x: T): T {
    return x;
}
// TS infers T
// id(5) => T will be number
// id("arbaz") => T will be string
// id(true) => T will be boolean

console.log(id(5));
console.log(id("arbaz"));
console.log(id([{ name: "arbaz", address: "india" }]));

function testingNewFn<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(testingNewFn([1, 2, 3, 4]));
console.log(testingNewFn(["a", "b", "c"]));
console.log(testingNewFn([{ name: "arbaz" }, { name: "mukherjee" }]));

function printer<T>(value: T): { value: T } {
    return { value };
}
console.log(printer(123));
console.log(printer("hello"));
console.log(printer({ name: "arbaz" }));

//! Note
// without generics => (x:unknown) => unknown
// with generics => (x:T) => T
// generics help us to retain the type information

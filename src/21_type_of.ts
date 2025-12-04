// types of primitives
function describeTypeOf(x: unknown) {
    if (typeof x === "string") {
        return "string";
    }
    if (typeof x === "number") {
        return 10;
    }
    if (typeof x === "boolean") {
        return true;
    }
    if (typeof x === "bigint") {
        return 100n;
    }
    if (typeof x === "symbol") {
        return Symbol("example");
    }
    if (typeof x === "undefined") {
        return undefined;
    }
    if (typeof x === "function") {
        return () => {};
    }
    if (x === null) {
        return null;
    }
    if (typeof x === "object") {
        return {};
    }
}

console.log(describeTypeOf("hi"));
console.log(describeTypeOf(123));
console.log(describeTypeOf(true));
console.log(describeTypeOf(10n));
console.log(describeTypeOf(Symbol("arbaz")));
console.log(describeTypeOf(undefined));
console.log(describeTypeOf(() => {}));
console.log(describeTypeOf(null));
console.log(describeTypeOf({}));

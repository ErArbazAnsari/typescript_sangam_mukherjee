// <T> constraints T so that only certain shapes are allowed
// <T extends K>
// key constraints -> <K extends keyof T> -> k must be a key of T
// .length

// not clear this properly
// function lengthPrinter<T extends { length: number }>(xN4: T): T {
// return length(xN4   );
// }
// console.log(lengthPrinter("hello"));

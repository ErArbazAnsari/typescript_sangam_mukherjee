type NumberAndStringOnly = { [k: string]: number };

let example: NumberAndStringOnly = {};

example["likes"] = 123;
example["phoneNumber"] = 123;

// alternate way
type Metrices = Record<"likes" | "views" | "comments", number>;
const exampleData: Metrices = {
    likes: 500,
    comments: 100,
    views: 10000000,
};

console.log("this is my metrices logs =>", exampleData);

// another example
type LooseType = Record<string, number | undefined>;
const lt: LooseType = {
    name: 123,
    address: undefined,
};
console.log("another example: ", lt);

// example with map
const priceMap = new Map<string, number>();
priceMap.set("likes", 100);
priceMap.set("comments", 500);
priceMap.set("views", 1000000);

console.log("this is our price map -> ", priceMap);

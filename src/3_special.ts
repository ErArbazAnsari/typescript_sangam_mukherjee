// strick null checks
let username1: string;
username1 = "arbaz";
// username1 = null; // Error: Type 'null' is not assignable to type 'string'.

// what is the solution?
let user: string | null;
user = "name";
user = null;

// those function which is not returning anything => in that case don't use any instead use void
function logMessage(message: string): void {
    console.log(message);
}

// function with never type => this function will never return anything
function fail(message: string): never {
    throw new Error(message);
}

// do no use any type in typescript => try to avoid it
const data: any = JSON.parse('{"key": "value"}');
data.notThere.toFixed(2); // this will cause runtime error => becuase this is going to compile successfully and cause an error at runtime.

// instead of any => use unknown
const data1: unknown = JSON.parse('{"key": "value"}');
(data1 as { notThere: number }).notThere.toFixed(2);

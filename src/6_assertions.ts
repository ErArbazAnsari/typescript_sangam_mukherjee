// not recommended but sometimes we need to use type assertions
const raw = '{"name":"Arbaz","age":30}';
const parsed = JSON.parse(raw) as { name: string; age: number };
console.log(`Name: ${parsed.name}, Age: ${parsed.age}`);

// good way
type User22 = { id: string; name: string; age: number };
function isUser(v: unknown): v is User22 {
    return (
        typeof v === "object" &&
        v !== null &&
        "id" in v &&
        typeof (v as any).id === "string" &&
        "name" in v &&
        typeof (v as any).name === "string" &&
        "age" in v &&
        typeof (v as any).age === "number"
    );
}

// safe approach
const maybe = JSON.parse(raw) as unknown;
if (isUser(maybe)) {
    console.log(`ID: ${maybe.id}, Name: ${maybe.name}, Age: ${maybe.age}`);
} else {
    console.log("Not a valid User object");
}

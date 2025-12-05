type AdminTest = { role: string; permissions: Array<string> };
type UserTest = { role: string; active: boolean };

type ExampleType = AdminTest | UserTest;

function testing(u: ExampleType): string {
    if ("permissions" in u) {
        return `role-${u.role}, permission-${u.permissions}`;
    } else {
        return `role-${u.role}, active-${u.active}`;
    }
}
const userData1: ExampleType = { role: "Admin", permissions: ["admin things"] };
const userData2: ExampleType = { role: "User", active: true };

console.log(testing(userData1));
console.log(testing(userData2));

// to avoid runtime crashes => we use optinal_nullish
//! ?? or ||
//! obj?.a

type person1 = {
    name: string;
    contact?: { email?: string };
};

const p1: person1 = {
    name: "arbaz",
};
const p2: person1 = {
    name: "ansari",
    contact: { email: "abaz@gmail.com" },
};

const r1 = p1.name;
// console.log(p1.contact.email); // could be undefined
// fix it - we can use optional chaining
const r2 = p1.contact?.email;
const r3 = p2.name;
const r4 = p2.contact?.email;

//! ??  => uses the right hand default only when the left hand is null or undefined
//! ||  => uses the defualt when the left hand is any falsy value (0, "", null, undefined, NaN)

const countfromServer: number | null = 0;
const labelfromserver: string | undefined = "";

const an = countfromServer ?? 100; // so its keep 0
const bn = countfromServer || 100; // keeps the valud 100 here



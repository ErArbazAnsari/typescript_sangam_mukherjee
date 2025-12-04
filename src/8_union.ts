// value => this or that

function printId(id: number | string) {
    if (typeof id === "string") {
        console.log("ID as string: ", id.toUpperCase());
        return;
    } else {
        console.log("ID as number: ", id.toFixed(2));
    }
}

printId("arbaz123");
printId(456.789);

// object union
type Admin = { role: "Admin"; permission: string[] };
type Customer = { role: "Customer"; purchaseHistory: string[] };

function printInf(user: Admin | Customer) {
    if (user.role === "Admin") {
        console.log("role is: ", user.role);
        console.log("permission is: ", user.permission);
    } else {
        console.log("role is: ", user.role);
        console.log("purchase history is: ", user.purchaseHistory);
    }
}

// array of union and union of array
const arr_of_union: (number | string)[] = [1, "two", 3, "four"];
const union_of_array: number[] | string[] =
    Math.random() > 0.1 ? [1, 2, 3] : ["one", "two", "three"];

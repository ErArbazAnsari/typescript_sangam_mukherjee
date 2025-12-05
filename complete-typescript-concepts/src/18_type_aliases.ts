// object shapes => similar to interfaces
// union types (a|b)
// intersection types (a&b)

type Person = {
    id: string;
    name: string;
    admin: boolean;
};

const HappyPerson: Person = {
    id: "123",
    name: "arbaz",
    admin: true,
};

type Status = "new" | "paid" | "pending";
function nextActionCheck(s: Status): string {
    switch (s) {
        case "new":
            return "new";
        case "paid":
            return "paid";
        case "pending":
            return "pending";
        default:
            return "default";
    }
}

type toMerge1 = { price: number };
type toMerge2 = { stock: number };

type allMerged = Person & toMerge1 & toMerge2;

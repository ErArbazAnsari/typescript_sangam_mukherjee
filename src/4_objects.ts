type UserInfo = {
    // required properties
    name: string;
    age: number;
    isAdmin: boolean;

    // special properties
    email?: string; // optional property
    readonly date: Date; // readonly property
};

const user1: UserInfo = {
    name: "Arbaz",
    age: 21,
    isAdmin: true,
    email: "mail.arbazansari@gmail.com",
    date: new Date(),
};

const user2: UserInfo = {
    name: "John",
    age: 25,
    isAdmin: false,
    date: new Date(),
};

function printUserInfo(user: UserInfo): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Is Admin: ${user.isAdmin}`);
    if (user.email) {
        console.log(`Email: ${user.email}`);
    }
    console.log(`Date: ${user.date.toISOString()}`);
    console.log("\n");
}

// update user2 date
// user2.date = new Date("2023-01-01"); // Error: Cannot assign to 'date' because it is a read-only property.

printUserInfo(user1);
printUserInfo(user2);

type Count = { [k: string]: number };
type NewCount = Record<"likes" | "comments" | "shares", number>;

const postCount: Count = {
    likes: 100,
    comments: 50,
    shares: 10,
};
const anotherPosts: NewCount = {
    likes: 200,
    comments: 80,
    shares: 20,
};

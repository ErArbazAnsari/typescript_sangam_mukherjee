// interfaces => names shape for objects

interface User {
    name: string;
    age: number;
    isAdmin: boolean;
    email?: string;
}
const user3: User = {
    name: "arbaz",
    age: 25,
    isAdmin: true,
};
const user4: User = {
    name: "alice",
    age: 23,
    isAdmin: false,
    email: "mail.arbazansari@gmail.com",
};

console.log(user3);
console.log(user4);

// simple inheritance
interface superUser extends User {
    role: string;
    permission: string[];
    createdAt?: Date;
}

const superUser1: superUser = {
    name: "arbaz",
    age: 25,
    isAdmin: true,
    email: "abc@gmail.com",
    role: "admin",
    permission: ["read", "write", "delete"],
    createdAt: new Date(),
};

console.log(superUser1);

interface mental {
    correct: boolean;
}
// multiple inheritance
interface superHuman extends User, mental {
    extraThings: boolean;
}

const newSuperHuman: superHuman = {
    extraThings: true,
    correct: false,
    name: "abc",
    age: 29,
    isAdmin: true,
    email: "testme@mal.com",
};

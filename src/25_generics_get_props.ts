type UserN7 = {
    id: string;
    name: string;
    email?: string; // T['email'] could be undefined
};

function getUser<T, K extends keyof T>(objN7: T, keyN7: K): T[K] {
    return objN7[keyN7];
}

const uN7: UserN7 = {
    id: "ui1",
    name: "arbaz",
    email: "abC@gmail.com",
};
const uN8: UserN7 = {
    id: "ui1",
    name: "arbaz",
};

const result1 = getUser(uN7, "email");

function setUserPropt<T, K extends keyof T>(
    objN7: T,
    keyN7: K,
    newVal: T[K]
): void {
    objN7[keyN7] = newVal;
}

setUserPropt(uN7, "name", "arbazansari");

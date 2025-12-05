// partial<T> this will make all the top level fields optional

type u1Address = {
    line1: string;
    city: string;
};

type User10 = {
    id: string;
    name: string;
    email?: string;
    address: u1Address;
};

type UserPatch = Partial<User10>;
const userPatchData: UserPatch = { name: "arbaz" };
const userPatchData1: UserPatch = {
    address: {
        line1: "hello",
        city: "bro",
    },
};

type allFieldNeedRequire = Required<User10>;
const newUserRegistration: allFieldNeedRequire = {
    id: "x11312",
    name: "arbaz",
    address: { line1: "1231", city: "ggn" },
    email: "abc@testmail.com",
};

// readonly user
type readOnlyType = Readonly<User10>;
const readOnlyUser: readOnlyType = {
    id: "x11312",
    name: "arbaz",
    address: { line1: "1231", city: "ggn" },
    email: "1231@gmail.com",
};
// readOnlyUser.id = "new id"; // we can't do this
console.log(readOnlyUser);

// pick<T, K> // keep only some keys
type publicUserN10 = Pick<User10, "id" | "name">;
const newPublicUser: publicUserN10 = {
    id: "12312",
    name: "arbaz bro",
    // email: "abc@gmail.com", we can do this
};

// omit <T, K> -> remove some keys
type UserWithoutEmail = Omit<User10, "id">;
const exampleUser: UserWithoutEmail = {
    name: "arbaz",
    address: { city: "ggn", line1: "hello" },
    email: "abc@gmail.com",
    // id: "12312" // not allow because in type we omitted this
};

// Record<K,V>
type UserRoles = "admin" | "user" | "editor";
type userRegistration = {
    id: string;
    name: string;
    role: UserRoles;
};
const newUserReg: userRegistration = {
    id: "1231",
    name: "arbaz",
    role: "admin",
};

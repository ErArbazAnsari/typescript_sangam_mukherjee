// value must be everything from a and from b

type a = { id: number; name: string };
type b = { age: number; address: string; createdAt: Date };

type intersection_ab = a & b;

const data_of_intersection: intersection_ab = {
    id: 1,
    name: "arbaz",
    age: 30,
    address: "india",
    createdAt: new Date(),
};

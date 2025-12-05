// returntype<F>
// parameters<F>
// instanceType<Ctor>
// constructorParameters<C>

function ExtractUserInfo(id: string, name: boolean) {
    return {
        id,
        name: "arbaz",
        log: name ? "details" : (undefined as string | undefined),
    };
}

type getUserResponse = ReturnType<typeof ExtractUserInfo>;
type getUserParamInfo = Parameters<typeof ExtractUserInfo>;

const argsInfo: getUserParamInfo = ["u1", true];
// const resultInfo: getUserResponse = ExtractUserInfo

class Person1 {
    constructor(public name: string, public age: number) {}
    greet() {
        return `hello ${name} and your age is: ${age}`;
    }
}

type person12 = InstanceType<typeof Person1>;
type personConstructor = ConstructorParameters<typeof Person1>;

const resultInF1: personConstructor = ["arbaz", 40];
const abc: person12 = new Person1(...resultInF1);
console.log(abc.greet());

class MyClass {
    id: string;
    name: string;
    email?: string;
    createAt: Date = new Date(); // init at declaration

    constructor(id: string, name: string, email?: string) {
        this.id = id;
        this.name = name;
        if (email) this.email = email;
    }
}

const myc1 = new MyClass("1", "arbaz");
const myc2 = new MyClass("2", "ansari", "email@email.com");

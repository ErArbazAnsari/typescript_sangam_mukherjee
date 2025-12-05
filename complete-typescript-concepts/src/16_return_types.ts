// inference return
const doubleFunc = (num: number) => {
    return num * 2;
};

// explicit return type
function tripleFunc(num: number): string {
    return (num * 3).toString();
}

function booleanFunc(flag: boolean): number {
    if (flag) {
        return 1;
    } else {
        return 0;
    }
}

// async
async function fetchData(url: string): Promise<string> {
    const res = await fetch(url);
    const data = await res.text();
    return data;
}

fetchData("https://jsonplaceholder.typicode.com/todos/2")
    .then((data) => {
        console.log("type of response: ", typeof data);
        console.log(data);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    })
    .finally(() => {
        console.log("Fetch attempt finished.");
    });

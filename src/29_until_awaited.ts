// promise<T>
// nexted promise <Promise<T>>
// thenables -> .then

// Awaited<T>
type Promise1 = Awaited<Promise<number>>;
type Promise2 = Awaited<Promise<Promise<string>>>;

type PromiseUnionExample = Awaited<Promise<string | number>>;

async function fetchCount() {
    return 43 as const;
}

type ResolveFetchCountValue = Awaited<ReturnType<typeof fetchCount>>;

async function getData() {
    return Promise.all([
        Promise.resolve(1 as const),
        Promise.resolve("name" as const),
    ] as const);
}

type DataTupleWithPromise = Awaited<ReturnType<typeof getData>>; // [1, "name"] as const

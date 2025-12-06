import { useEffect, useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <p>count: {count}</p>
        </>
    )


}

type LoadState = { status: "idle" } | { status: "loading" } | { status: "success", data: string } | { status: "error", message: string }
export function LoaderDemo() {
    const [loader, setLoader] = useState<LoadState>({ status: "idle" })

    return (
        <>
            current status: {loader.status}
            <button onClick={() => setLoader({ status: "loading" })}>loading</button>
            <button onClick={() => setLoader({ status: "success", data: "arbaz" })}>success</button>
            <button onClick={() => setLoader({ status: "error", message: "error" })}>Error</button>
        </>
    )
}
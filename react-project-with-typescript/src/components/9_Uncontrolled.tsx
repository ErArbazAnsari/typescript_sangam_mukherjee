import { useRef, type FormEvent } from "react";

function getString(fd: FormData, key: string): string | null {
    const result = fd.get(key);

    return typeof result === 'string' ? result : null
}
function getNumber(fd: FormData, key: string): number | null {
    const result = fd.get(key);
    return typeof result === 'number' ? result : Number(result)
}

export function Uncontrolled() {
    const formRef = useRef<HTMLFormElement | null>(null)
    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const fname = getString(formData, "name");
        const fage = getNumber(formData, "age")
        console.log("name", fname)
        console.log("age", fage)
    }
    return <form onSubmit={handleFormSubmit} ref={formRef}>
        <input type="text" name="name" defaultValue={'guest'} />
        <input type="number" name="age" defaultValue={"18"} min={0} />
        <button type="submit">click</button>
    </form>
}
import { useState, type ChangeEvent, type KeyboardEvent, type MouseEvent } from "react";

export function FormExample() {
    const [value, setValue] = useState("")
    const [show, setShow] = useState(false)

    const handleEventChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    function handleShow(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setShow((pre) => !pre)
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.key === 'Enter') {
            setShow((prev) => !prev);
        }
        if (e.key === 'Escape') {
            setValue("")
        }
    }

    return <>
        {/* <input type="text" value={value} onChange={(e) => handleEventChange(e)} onKeyDown={(e) => handleKeyDown(e)} /> */}
        <input type="text" value={value} onChange={(e) => handleEventChange(e)} />
        <button type="submit" onClick={(e) => handleShow(e)}>{show ? "hide it" : "show it"}</button>

        {show && <h1>value: {value}</h1>}
    </>
}
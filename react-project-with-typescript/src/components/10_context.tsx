import { useState, type ReactNode } from "react"
import { MyGlobalContext } from "./10_GlobalContext"

export default function GlobalState({ children }: { children: ReactNode }) {
    const [flag, setFlag] = useState("")
    return (
        <MyGlobalContext.Provider value={{ flag, setFlag }}>{children}
        </MyGlobalContext.Provider>
    )
}
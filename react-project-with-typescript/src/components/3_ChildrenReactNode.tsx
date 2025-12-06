import type { ReactNode } from "react"

type PanelProps = {
    title: string,
    children?: ReactNode
}

interface RequiredChildrenProp extends PanelProps {
    title: string;
    children: ReactNode
}
export function RequiredChildrenPanel({ title, children }: RequiredChildrenProp) {
    return (
        <section>
            <h1>{title}</h1>
            <div>{children}</div>
        </section>
    )
}

export function Panel({ title, children }: PanelProps) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{children ?? <p>children is not present here</p>}</h2>
        </>
    )
}
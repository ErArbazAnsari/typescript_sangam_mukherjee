import type { ComponentProps, CSSProperties } from "react";

type ButtonBaseProps = ComponentProps<'button'>
type ButtonProps = ButtonBaseProps & { variant?: 'primary' | 'secondary' }

export function Button({ variant = 'primary', children, style, ...rest }: ButtonProps) {
    const base: CSSProperties = {
        padding: '10px',
        backgroundColor: "yellow",
        color: "black"
    }
    return <button style={{ ...base, ...style, ...rest }}>{children}</button>
}
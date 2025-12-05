import type { ReactNode } from "react";

interface UserCardProps {
    id: string,
    name: string,
    subtitle?: ReactNode
}

export function UserCard({ id, name, subtitle }: UserCardProps) {
    const username = name ?? "guest"
    return (
        <>
            <strong>#{id}</strong>
            <br />
            {name && <p>
                name: {username}
            </p>
            }
            <br />
            {
                subtitle && subtitle
            }
        </>
    )
}
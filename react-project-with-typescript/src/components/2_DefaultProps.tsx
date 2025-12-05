type GreetType = {
    name?: string;
    shout?: boolean
}

// export function GeetMe({ name = 'guest', shout = true }: GreetType) {
//     return (
//         <>
//             <h1>name: {name === 'guest' ? name.toLocaleLowerCase() : name.toUpperCase()}</h1>
//             <p>shout: {shout && "yes!!!"}</p>
//         </>
//     )
// }

export function GeetMe(props: GreetType) {
    const name = props.name ?? 'bhalu';
    const shout = props.shout ?? true

    return (
        <>
            <h1>name: {name === 'guest' ? name.toLocaleLowerCase() : name.toUpperCase()}</h1>
            <p>shout: {shout && "yes!!!"}</p>
        </>
    )
}
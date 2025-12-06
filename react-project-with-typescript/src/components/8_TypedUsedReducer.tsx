import { useReducer } from "react"

type CounterState = {
    count: number,
    step: number
}

type Action =
    | { type: 'INCREMENT' }
    | { type: "DECREMENT" }
    | { type: "RESET", to?: number }

function init(initialCount: number): CounterState {
    return { count: initialCount, step: 1 }
}

function counterReducer(state: CounterState, action: Action): CounterState {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + state.step }

        case "DECREMENT":
            return { ...state, count: state.count - state.step }

        case "RESET":
            return { ...state, count: action.to ?? 0 }
        default:
            return state
    }
}

export function TypeReducer({ initial = 0 }: { initial?: number }) {
    const [state, dispatch] = useReducer(counterReducer, initial, init)

    return <>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })} > increment</button >
        <button onClick={() => dispatch({ type: "DECREMENT" })} > decrement</button >
        <button onClick={() => dispatch({ type: "RESET" })} > reset</button >
    </>
}
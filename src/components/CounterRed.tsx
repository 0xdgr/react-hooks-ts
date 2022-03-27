import { useReducer } from 'react';

const initialState = {
    counter: 0,
}

type CounterActions =
    | { action: 'INCREMENT' }
    | { action: 'DECREMENT' }
    | { action: 'CUSTOM', payload: number };

const counterReducer = (state: typeof initialState, action: CounterActions) => {
    switch (action.action) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter -1
            }
        case 'CUSTOM':
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state;
    }
}

export const CounterRed = () => {

    const [counterState, dispatch] = useReducer(counterReducer, initialState);

    return (
        <>
            <h3>Counter: {counterState.counter}</h3>

            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({action: 'DECREMENT'})}>
                -1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({action: 'INCREMENT'})}>
                +1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({action: 'CUSTOM', payload: 100})}>
                =100
            </button>
        </>
    );
}
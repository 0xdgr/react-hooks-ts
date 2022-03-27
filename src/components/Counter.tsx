import { useState } from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = (increment: number = 1): void => {
        setCounter(counter + increment);
    };

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <p>Value: {counter}</p>
            <button
                onClick={() => handleIncrement()}
                className="btn btn-outline-primary mt-2">
                +1
            </button>
            <button
                onClick={() => handleIncrement(2)}
                className="btn btn-outline-primary mt-2">
                +2
            </button>
            <button
                onClick={() => setCounter(0)}
                className="btn btn-outline-danger mt-2">
                Reset
            </button>
        </div>
    );
}
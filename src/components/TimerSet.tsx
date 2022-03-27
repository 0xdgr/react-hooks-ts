import { Timer } from './Timer';
import { useState } from 'react';

export const TimerSet = () => {
    const [milliseconds, setMilliseconds] = useState(1000);

    return (
        <>
            <p>Set Milliseconds:</p>
            <button
                className="btn btn-outline-success mt-1"
                onClick={() => setMilliseconds(1000)}>
                1000
            </button>
            <button
                className="btn btn-outline-success mt-1"
                onClick={() => setMilliseconds(2000)}>
                2000
            </button>
            <button
                className="btn btn-outline-danger mt-1"
                onClick={() => setMilliseconds(0)}>
                Stop
            </button>

            <Timer milliseconds={milliseconds}/>
        </>
    );
}
import { useEffect, useRef, useState } from 'react';

type TimerProps = {
    milliseconds: number
}

export const Timer = ({milliseconds}: TimerProps) => {

    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef<NodeJS.Timer>();

    useEffect(() => {
        intervalRef.current && clearInterval(intervalRef.current);
        if (milliseconds > 0) {
            intervalRef.current = setInterval(() => setSeconds(s => s + 1), milliseconds);
        }
    }, [milliseconds]);

    return (
        <>
            <h4 className="mt-4">Timer: {seconds}</h4>
        </>
    );
}
import {useEffect, useRef, useState} from "react";

const useTimer = (totalDuration) => {
    const interval = useRef(null);
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(totalDuration);

    useEffect(() => {
        if(isRunning){
            interval.current = setInterval(decrement, 1000);
        } else if(interval) {
            clearInterval(interval.current);
            setSeconds(totalDuration);
        }

        return () => { clearInterval(interval.current)}
    }, [isRunning, totalDuration]);

    useEffect(() => {
        if(seconds <= 0){
            setIsRunning(false);
        }
    }, [seconds])

    const decrement = () => {
        setSeconds(current => current-1);
    }

    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    return { isRunning, start, stop, seconds };
};

export default useTimer;

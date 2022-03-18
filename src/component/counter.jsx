import { useEffect, useState } from "react";

const TICK_RATE = 13;

export default function Counter({startNumber, endNumber, duration}) {
    const [display, setDisplay] = useState(startNumber);
    const step = Math.round((endNumber - startNumber) / (duration / TICK_RATE));


    useEffect(() => {
        let activeTimeout;
        if(display < endNumber) {
            activeTimeout = setTimeout(() => {
                setDisplay(Math.min(endNumber, display + step));
            }, TICK_RATE);
        }

        return () => {
            clearTimeout(activeTimeout);
        }
    }, [display])

    return (
        <span>
            {display.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
    )
}
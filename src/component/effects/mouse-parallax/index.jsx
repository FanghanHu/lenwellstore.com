import { useEffect, useRef } from "react";
import "./style.css";

//time between each style assignment, in ms
const COOL_DOWN = 30;

export default function MouseParallax({image, imageScale=110, isReverse=false, style, className=""}) {
    const ref = useRef();
    const timeRef = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const now = Date.now();
            
            //timeRef adds a cool down timer to the effect, the numbebr is in seconds
            if(now - timeRef.current > COOL_DOWN) {
                let x = (e.x / window.innerWidth - 0.5) * (imageScale - 100) / imageScale * 100;
                let y = (e.y / window.innerHeight - 0.5) * (imageScale - 100) / imageScale * 100;

                if(isReverse) {
                    x = -x;
                    y = -y;
                }

                ref.current.style.transform = `translate(${x}%, ${y}%)`;
                timeRef.current = now;
            }
        }

        document.body.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <img src={image} alt="parallax" ref={ref} className={`parallax ${className}`} style={{
            width: imageScale + "%",
            height: imageScale + "%",
            top: -(imageScale - 100)/2 + "%",
            left: -(imageScale - 100)/2 + "%",
            ...style
        }}/>
    );
}
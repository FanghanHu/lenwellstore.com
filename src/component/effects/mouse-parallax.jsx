import { useEffect, useRef } from "react";

//time between each style assignment, in ms
const COOL_DOWN = 200;

export default function MouseParallax({image, imageScale=110, isReverse=false, transitionTime="0.8s", style, className}) {
    const ref = useRef();
    const timeRef = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const now = Date.now();
            
            //timeRef adds a cool down timer to the effect, the numbebr is in seconds
            if(now - timeRef.current > COOL_DOWN) {
                const left = (e.x / window.innerWidth * (imageScale - 100)) - (imageScale - 100);
                const top = (e.y / window.innerHeight * (imageScale - 100)) - (imageScale - 100);
                //console.log(`top: ${top}, left: ${left}`);
                ref.current.style.top = (isReverse ? -(top + (imageScale - 100)) : top) + "%";
                ref.current.style.left = (isReverse ? -(left + (imageScale - 100)) : left) + "%";
                timeRef.current = now;
            }
        }

        document.body.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <img src={image} alt="parallax" ref={ref} className={className} style={{
            width: imageScale + "%",
            height: imageScale + "%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
            top: -(imageScale-100)/2 + "%",
            left: -(imageScale-100)/2 + "%",
            transition: "all ease-out " + transitionTime,
            ...style
        }}/>
    );
}
import "./style.css";
import banner from "../../assets/phone-repiar.jpg";
import icon from "../../assets/mobile-repair-logo.svg";

export default function LcdSwap() {
    return (
        <div>
            <div className="display-6 m-3 border-bottom w-fit-content">LCD Swap Service</div>
            <div className="background" style={{backgroundImage: `url(${banner})`, width:"100%", height:"350px"}}></div>
            <div className="text-center">
                <div className="h5 mt-5 mb-3">
                    Why Swap
                </div>
                <div className="fw-light mx-auto p-2"  style={{maxWidth: "700px"}}>
                    Repairing a broken screen takes time, but replacing it is much faster, the problem is that replacing a LCD 
                    usually cost twice as much. To solve this problem 
                    and to provide you the best experience possible, We 
                    are now offering a LCD swap service
                </div>
                <img className="m-4" src={icon} alt="lcd swap" width="300px" />
                <div className="h5 mb-3">
                    How it works
                </div>
                <div className="fw-light mx-auto mb-5 p-2"  style={{maxWidth: "700px"}}>
                    We have a full inventory of genuine OEM screens ready for swap,when you bring in your device, we replace your screen at the low repair cost, you get your device ready  in under 30 minutes or less, and we will keep your old screen to repair later. Only devices with their original LCD are eligible for the swap service
                </div>
            </div>
        </div>
    );
}
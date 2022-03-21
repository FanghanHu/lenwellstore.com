import "./style.css";
import { Link } from "react-router-dom";
import banner from "../../assets/bg-home3.jpg";
import ipad from "../../assets/sa-iPad.png";
import iphone from "../../assets/sa-iPhone.png"
import iwatch from "../../assets/sa-iWatch.png"
import samsungPhone from "../../assets/sa-Samsung-Phone.png"
import samsungTablet from "../../assets/sa-Samsung-Tablet.png"

const DEVICE_TYPES = [
    [ipad, "iPad", "ipad"],
    [iphone, "iPhone", "iphone"],
    [iwatch, "Apple Watch", "apple-watch"],
    [samsungPhone, "Samsung Phone", "samsung-phone"],
    [samsungTablet, "Samsung Tablet", "samsung-tablet"]
]

export default function RepairService() {
	return (
		<div>
			<div className="display-6 m-3 border-bottom w-fit-content">
				Repair Service Price List
			</div>
			<div
				className="background w-100 px-1 pt-3 pb-4 p-md-5"
				style={{ backgroundImage: `url(${banner})`, height: "350px" }}
			></div>
            <div className="text-center p-3">You can find an estimated price for all kinds of repair services here. Start by selecting your device model.</div>
            <div className="p-2 p-md-5 d-flex flex-wrap justify-content-center">
                {DEVICE_TYPES.map((device, index) => {
                    return (
                        <Link to={device[2]} className="p-1 m-2 rounded border device-type-button" key={`link-${index}`}>
                            <img src={device[0]} alt={device[1]}  />
                            <div className="text-center">{device[1]}</div>
                        </Link>
                    );
                })}
            </div>
		</div>
	);
}

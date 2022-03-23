import background from "../../assets/bg-home4.jpg";
import packages from "../../assets/icon-package.png";
import money from "../../assets/icon-money.png";
import tablet from "../../assets/icon-tablet.png";
import { Link } from "react-router-dom";

export default function Page4() {
	return (
		<div className="segoe">
			<div
				className="background px-2 px-md-3 py-2 py-lg-5 text-white text-center"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="mt-5 mb-1 display-5 fw-bold">LCD Buyback</div>
				<div className="h6 fw-light mt-3 mb-5">
					Sell your broken screen to us
				</div>
				<Link to="/lcd-buyback" className="h6 text-white fw-light text-decoration-underline mb-5">
					learn more
				</Link>
			</div>
			<div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5 text-center">
				<div className="m-2 m-lg-5">
					<div className="buyback-icon p-2">
						<img className="position-absolute top-50 start-50 translate-middle" src={packages} alt="packages"/>
					</div>
					<div className="h5 fw-light">Mail your screen to us</div>
				</div>
				<div className="m-2 m-lg-5">
					<div className="buyback-icon">
						<img className="position-absolute top-50 start-50 translate-middle" src={tablet} alt="tablet" />
					</div>
					<div className="h5 fw-light">We evalue your screen</div>
				</div>
				<div className="m-2 m-lg-5">
					<div className="buyback-icon">
						<img className="position-absolute top-50 start-50 translate-middle" src={money} alt="payout" />
					</div>
					<div className="h5 fw-light">Get paid in Cash, Paypal or Cash App</div>
				</div>
			</div>
		</div>
	);
}

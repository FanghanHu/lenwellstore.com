import "./style.css";
import banner from "../../assets/bg-home6.jpg";
import ipad from "../../assets/icon-tablet.png";
import money from "../../assets/icon-money.png";
import { Link } from "react-router-dom";

export default function LcdBuyback() {
	return (
		<div>
			<div className="display-6 m-3 border-bottom w-fit-content">
				LCD Buyback
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 p-3">
						<img className="rounded w-100" src={banner} alt="lcd buyback" />
					</div>
					<div className="col p-3">
						<p>
							The LCD is one of the most expensive component in your device, and
							it is the easiest to break. If somehow you ended up with a broken
							screen in your hands, Lenwell's LCD buyback program can help you
							mitigate the repair cost by recycling the LCD.
						</p>
						<p>
							You can sell your broken screens for a cash payout or trade them
							in for store credits, which can be used to buy replacement parts
							or other gadgets.
						</p>
					</div>
				</div>
				<div className="h3 text-center mt-5 border-bottom p-1">
					How to start
				</div>
				<div className="h5 mt-5 mb-2 text-center">For Individuals</div>
				<div className="d-flex justify-content-center align-items-center">
					<div className="p-2">
						<img
							src={ipad}
							alt="iPad"
							style={{ maxWidth: "min(150px, 25vw)" }}
						/>
					</div>
					<div className="p-2">
						<div style={{ maxWidth: "450px", fontWeight: "300"}}>
							Bring your screen directly to us, our technicians will test it on
							the spot, and you can get a quote in 5 minutes.
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<div className="p-2">
						<div style={{ maxWidth: "450px", fontWeight: "300"}}>
							Choose between get paid in cash or store credit, or keep the
							screen if you are not satisfied with the quote, there is no harm
							in trying.
						</div>
					</div>
					<div className="p-2">
						<img
							src={money}
							alt="get paid"
							style={{ maxWidth: "min(150px, 25vw)" }}
						/>
					</div>
				</div>
				<div className="h5 mt-5 mb-2 text-center">For Businesses</div>
				<div className="text-center mx-auto"  style={{ maxWidth: "600px", fontWeight: "300"}}>
					<p className="my-3">
						If you are a business that can acquire broken screens in bulk, you
						need to talk to a representative first. Depends on the amount and
						quality of your screens, unit price may be different, We usually
						give you a quote within two business days.
					</p>
					<p className="my-3">
						We offer loyalty discounts for companies that both sells us LCDs and
						uses our repair service or purchase replacement parts from us.
						depends on the monthly volume, we offer discounts from 5% to 15% on
						all items and services.
					</p>
					<p className="my-3">
						Business, especially cellphone or electronics repair shops can use
						this program to improve their profit margin and secure a sturdy OEM
						supply chain.
					</p>
				</div>
				<div className="m-5 text-center">
					<Link className="btn btn-outline-dark rounded-pill px-4 py-1" to="/contact-us">Contact us</Link>
				</div>
			</div>
		</div>
	);
}

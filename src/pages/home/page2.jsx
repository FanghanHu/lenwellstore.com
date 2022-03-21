import { Link } from "react-router-dom";
import background from "../../assets/bg-home2.jpg";
import swapIcon from "../../assets/mobile-repair-logo.svg";
import ScrollButton from "../../component/scroll-button";

export default function Page2() {
	return (
		<div className="segoe" id="page2">
			<div className="container">
				<div className="mx-2 my-1 my-sm-2 my-md-3 my-lg-5">
					<div className="h2 text-shadow mb-1">
						Fast and Reliable Repair Service
					</div>
					<div className="h3 text-muted">For Apple and Samsung devices</div>
				</div>
			</div>
			<div
				className="background px-2 px-md-3 py-2 py-lg-5"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="d-flex justify-content-center">
					<div className="glass glass-dark shadow text-white w-fit-content p-4">
						<ul className="list-unstyled h4 md-h1 fw-light text-nowrap">
							<li>✓ Glass Repair</li>
							<li>✓ LCD Screen Replacement</li>
							<li>✓ Touch Pad Digitizer Repair</li>
							<li>✓ Battery Replacement</li>
							<li>✓ Charging Port Repair</li>
							<li>✓ Speaker Repair</li>
						</ul>
						<Link to="/repair-service" className="btn btn-primary h5 p-1">Price Estimate</Link>
					</div>
					<div className="w-md-25"></div>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center">
						<div className="text-center mt-5">
							<div className="display-6 fw-bold">Need it fast?</div>
							<div className="h6 fw-light">
								We can get it done under 30 mins
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-xl-4 text-center py-5">
						<img width={200} src={swapIcon} alt="lcd swap" />
						<div className="fw-bold mt-3">Screen Swap Service</div>
						<div>Walk out in 30 mins</div>
						<div>We use genuine LCD only</div>
						<div>Fix broken screen, touch issue</div>
						<Link className="link mt-5" to="/lcd-swap">
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

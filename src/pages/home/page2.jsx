import background from "../../assets/bg-home2.jpg";
import swapIcon from "../../assets/mobile-repair-logo.svg";
import ScrollButton from "../../component/scroll-button";

export default function Page2() {
	return (
		<div
			className="vh-100 position-relative segoe d-flex flex-column"
			id="page2"
		>
			<div className="h-50 d-flex flex-column justify-content-between">
				<div className="mx-auto w-fit-content flex-grow-1 d-flex flex-column justify-content-center">
					<div className="h2 text-shadow mb-1">
						Fast and Reliable Repair Service
					</div>
					<div className="h3 text-muted">
						For Apple and Samsung devices
					</div>
				</div>
				<div
					className="background px-2 px-md-3 py-2 py-md-5"
					style={{ backgroundImage: `url(${background})` }}
				>
					<div className="d-flex justify-content-center">
						<div className="glass glass-dark text-white w-fit-content px-3 py-3 pe-5">
							<ul className="no-decoration h4 dynamic fw-normal">
								<li>✓ Glass Repair</li>
								<li>✓ LCD Screen Replacement</li>
								<li>✓ Touch Pad Digitizer Repair</li>
								<li>✓ Battery Replacement</li>
								<li>✓ Charging Port Repair</li>
								<li>✓ Speaker Repair</li>
							</ul>
							<div className="btn btn-primary h4 mx-5">Price Estimate</div>
						</div>
						<div className="w-md-25"></div>
					</div>
				</div>
			</div>
			<div className="h-50 d-flex flex-column">
				<div className="text-center my-3">
					<div className="h2 fw-bold">Need it fast</div>
					<div className="h4">We can get it done in under 30 mins</div>
				</div>
				<div
					className="flex-grow-1"
					style={{
						backgroundImage: `url(${swapIcon})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
					}}
				></div>
				<div className="text-center my-3 h5 fw-light">
					<div className="fw-bold">Screen Swap Service</div>
					<div>Walk out in 30 mins</div>
					<div>We use genuine LCD only</div>
					<div>Fix broken screen, touch issue</div>
					<a className="link mt-5" href="#">
						Learn more
					</a>
				</div>
			</div>
			<div style={{ height: "calc(0.5rem + 22px)" }}></div>
			<ScrollButton scrollTo="page3" color="#000" />
		</div>
	);
}
